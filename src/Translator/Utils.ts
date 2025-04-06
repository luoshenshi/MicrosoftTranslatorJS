export class Utils {
  private static readonly BASE_URL =
    "https://api.cognitive.microsofttranslator.com/";
  private static readonly ENDPOINT = "translate?";

  static getUrl(from: string, to: string): string {
    const params = new URLSearchParams({
      "api-version": "3.0",
      from,
      to,
    });

    return this.BASE_URL + this.ENDPOINT + params.toString();
  }
}
