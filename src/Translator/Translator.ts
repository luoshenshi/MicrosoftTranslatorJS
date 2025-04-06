import { NetworkClient } from "../Network/NetworkClient";
import { Utils } from "./Utils";
import { BinaryLike, createHmac, randomUUID } from "node:crypto";

export class Translator {
  private networkClient = new NetworkClient();
  private static readonly SECRET_KEY =
    "oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==";

  async translate(text: string, from: string, to: string): Promise<string> {
    const url = Utils.getUrl(from, to);
    const xClientTraceId = this.clientTraceId();
    const xMTSignature = this.generateSignature(url);

    const headers = new Map<string, string>([
      ["X-ClientTraceId", xClientTraceId],
      ["X-MT-Signature", xMTSignature],
    ]);

    const json = JSON.stringify([{ text }]);

    try {
      const translatedJson = await this.networkClient.fetch(url, headers, json);

      const match = /"text"\s*:\s*"([^"]+)"/.exec(translatedJson || "");
      return match?.[1] ?? "Not Found";
    } catch (error: any) {
      if (error.message?.includes("getaddrinfo ENOTFOUND")) {
        throw new Error("No Internet Connection");
      }
      throw new Error(error.message || "Unknown error");
    }
  }

  private clientTraceId(): string {
    return randomUUID().replace(/[:\[\]<>]/g, "");
  }

  private generateSignature(url: string): string {
    let formattedUrl = url.replace(/^https?:\/\//i, "").toLowerCase();
    const encodedUrl = encodeURIComponent(formattedUrl);
    const timestamp = this.getTimestamp();
    const uniqueId = randomUUID().replace(/-/g, "");
    const data =
      `MSTranslatorAndroidApp${encodedUrl}${timestamp}${uniqueId}`.toLowerCase();

    try {
      const key: Buffer = Buffer.from(Translator.SECRET_KEY, "base64");

      const hmac = createHmac("sha256", key as unknown as BinaryLike)
        .update(data)
        .digest("base64");

      return `MSTranslatorAndroidApp::${hmac}::${timestamp}::${uniqueId}`;
    } catch (e: any) {
      console.error("Error creating HmacSignature:", e.message);
      return "";
    }
  }

  private getTimestamp(): string {
    const now = new Date(Date.now() + 5000);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      now.getUTCDay()
    ];
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][now.getUTCMonth()];
    const date = `${weekday}, ${now
      .getUTCDate()
      .toString()
      .padStart(2, "0")} ${month} ${now.getUTCFullYear()} ${now
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${now
      .getUTCMinutes()
      .toString()
      .padStart(2, "0")}:${now.getUTCSeconds().toString().padStart(2, "0")}gmt`;
    return date.toLowerCase();
  }
}
