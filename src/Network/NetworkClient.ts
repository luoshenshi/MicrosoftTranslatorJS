export class NetworkClient {
  async fetch(
    url: string,
    headers: Map<string, string>,
    body: string
  ): Promise<string | null> {
    const headersObj: Record<string, string> = {};
    headers.forEach((value, key) => {
      headersObj[key] = value;
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headersObj,
      },
      body: body,
    });

    if (!response.ok) return null;
    return await response.text();
  }
}
