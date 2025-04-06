// src/Network/NetworkClient.ts
var NetworkClient = class {
  async fetch(url, headers, body) {
    const headersObj = {};
    headers.forEach((value, key) => {
      headersObj[key] = value;
    });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headersObj
      },
      body
    });
    if (!response.ok) return null;
    return await response.text();
  }
};

// src/Translator/Utils.ts
var Utils = class {
  static getUrl(from, to) {
    const params = new URLSearchParams({
      "api-version": "3.0",
      from,
      to
    });
    return this.BASE_URL + this.ENDPOINT + params.toString();
  }
};
Utils.BASE_URL = "https://api.cognitive.microsofttranslator.com/";
Utils.ENDPOINT = "translate?";

// src/Translator/Translator.ts
import { createHmac, randomUUID } from "node:crypto";
var _Translator = class _Translator {
  constructor() {
    this.networkClient = new NetworkClient();
  }
  async translate(text, from, to) {
    const url = Utils.getUrl(from, to);
    const xClientTraceId = this.clientTraceId();
    const xMTSignature = this.generateSignature(url);
    const headers = /* @__PURE__ */ new Map([
      ["X-ClientTraceId", xClientTraceId],
      ["X-MT-Signature", xMTSignature]
    ]);
    const json = JSON.stringify([{ text }]);
    try {
      const translatedJson = await this.networkClient.fetch(url, headers, json);
      const match = /"text"\s*:\s*"([^"]+)"/.exec(translatedJson || "");
      return match?.[1] ?? "Not Found";
    } catch (error) {
      if (error.message?.includes("getaddrinfo ENOTFOUND")) {
        throw new Error("No Internet Connection");
      }
      throw new Error(error.message || "Unknown error");
    }
  }
  clientTraceId() {
    return randomUUID().replace(/[:\[\]<>]/g, "");
  }
  generateSignature(url) {
    let formattedUrl = url.replace(/^https?:\/\//i, "").toLowerCase();
    const encodedUrl = encodeURIComponent(formattedUrl);
    const timestamp = this.getTimestamp();
    const uniqueId = randomUUID().replace(/-/g, "");
    const data = `MSTranslatorAndroidApp${encodedUrl}${timestamp}${uniqueId}`.toLowerCase();
    try {
      const key = Buffer.from(_Translator.SECRET_KEY, "base64");
      const hmac = createHmac("sha256", key).update(data).digest("base64");
      return `MSTranslatorAndroidApp::${hmac}::${timestamp}::${uniqueId}`;
    } catch (e) {
      console.error("Error creating HmacSignature:", e.message);
      return "";
    }
  }
  getTimestamp() {
    const now = new Date(Date.now() + 5e3);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][now.getUTCDay()];
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
      "Dec"
    ][now.getUTCMonth()];
    const date = `${weekday}, ${now.getUTCDate().toString().padStart(2, "0")} ${month} ${now.getUTCFullYear()} ${now.getUTCHours().toString().padStart(2, "0")}:${now.getUTCMinutes().toString().padStart(2, "0")}:${now.getUTCSeconds().toString().padStart(2, "0")}gmt`;
    return date.toLowerCase();
  }
};
_Translator.SECRET_KEY = "oik6PdDdMnOXemTbwvMn9de/h9lFnfBaCWbGMMZqqoSaQaqUOqjVGm5NqsmjcBI1x+sS9ugjB55HEJWRiFXYFw==";
var Translator = _Translator;

// src/Translator/TranslatorLocale.ts
var TranslatorLocale = class {
};
/**
 * AutoDetect Language
 */
TranslatorLocale.AUTO_DETECT = "";
/**
 * Afrikaans
 */
TranslatorLocale.AF = "af";
/**
 * Amharic
 */
TranslatorLocale.AM = "am";
/**
 * Arabic
 */
TranslatorLocale.AR = "ar";
/**
 * Assamese
 */
TranslatorLocale.AS = "as";
/**
 * Azerbaijani
 */
TranslatorLocale.AZ = "az";
/**
 * Bashkir
 */
TranslatorLocale.BA = "ba";
/**
 * Bulgarian
 */
TranslatorLocale.BG = "bg";
/**
 * Bhojpuri
 */
TranslatorLocale.BHO = "bho";
/**
 * Bangla
 */
TranslatorLocale.BN = "bn";
/**
 * Tibetan
 */
TranslatorLocale.BO = "bo";
/**
 * Bodo
 */
TranslatorLocale.BRX = "brx";
/**
 * Bosnian
 */
TranslatorLocale.BS = "bs";
/**
 * Catalan
 */
TranslatorLocale.CA = "ca";
/**
 * Czech
 */
TranslatorLocale.CS = "cs";
/**
 * Welsh
 */
TranslatorLocale.CY = "cy";
/**
 * Danish
 */
TranslatorLocale.DA = "da";
/**
 * German
 */
TranslatorLocale.DE = "de";
/**
 * Dogri
 */
TranslatorLocale.DOI = "doi";
/**
 * Lower Sorbian
 */
TranslatorLocale.DSB = "dsb";
/**
 * Divehi
 */
TranslatorLocale.DV = "dv";
/**
 * Greek
 */
TranslatorLocale.EL = "el";
/**
 * English
 */
TranslatorLocale.EN = "en";
/**
 * Spanish
 */
TranslatorLocale.ES = "es";
/**
 * Estonian
 */
TranslatorLocale.ET = "et";
/**
 * Basque
 */
TranslatorLocale.EU = "eu";
/**
 * Persian
 */
TranslatorLocale.FA = "fa";
/**
 * Finnish
 */
TranslatorLocale.FI = "fi";
/**
 * Filipino
 */
TranslatorLocale.FIL = "fil";
/**
 * Fijian
 */
TranslatorLocale.FJ = "fj";
/**
 * Faroese
 */
TranslatorLocale.FO = "fo";
/**
 * French
 */
TranslatorLocale.FR = "fr";
/**
 * Irish
 */
TranslatorLocale.GA = "ga";
/**
 * Galician
 */
TranslatorLocale.GL = "gl";
/**
 * Konkani
 */
TranslatorLocale.GOM = "gom";
/**
 * Gujarati
 */
TranslatorLocale.GU = "gu";
/**
 * Hausa
 */
TranslatorLocale.HA = "ha";
/**
 * Hebrew
 */
TranslatorLocale.HE = "he";
/**
 * Hindi
 */
TranslatorLocale.HI = "hi";
/**
 * Chhattisgarhi
 */
TranslatorLocale.HNE = "hne";
/**
 * Croatian
 */
TranslatorLocale.HR = "hr";
/**
 * Upper Sorbian
 */
TranslatorLocale.HSB = "hsb";
/**
 * Haitian Creole
 */
TranslatorLocale.HT = "ht";
/**
 * Hungarian
 */
TranslatorLocale.HU = "hu";
/**
 * Armenian
 */
TranslatorLocale.HY = "hy";
/**
 * Indonesian
 */
TranslatorLocale.ID = "id";
/**
 * Igbo
 */
TranslatorLocale.IG = "ig";
/**
 * Inuinnaqtun
 */
TranslatorLocale.IKT = "ikt";
/**
 * Icelandic
 */
TranslatorLocale.IS = "is";
/**
 * Italian
 */
TranslatorLocale.IT = "it";
/**
 * Inuktitut
 */
TranslatorLocale.IU = "iu";
/**
 * Inuktitut (Latin)
 */
TranslatorLocale.IU_LATN = "iu-Latn";
/**
 * Japanese
 */
TranslatorLocale.JA = "ja";
/**
 * Georgian
 */
TranslatorLocale.KA = "ka";
/**
 * Kazakh
 */
TranslatorLocale.KK = "kk";
/**
 * Khmer
 */
TranslatorLocale.KM = "km";
/**
 * Kannada
 */
TranslatorLocale.KN = "kn";
/**
 * Korean
 */
TranslatorLocale.KO = "ko";
/**
 * Kashmiri
 */
TranslatorLocale.KS = "ks";
/**
 * Kurdish
 */
TranslatorLocale.KU = "ku";
/**
 * Kyrgyz
 */
TranslatorLocale.KY = "ky";
/**
 * Lingala
 */
TranslatorLocale.LN = "ln";
/**
 * Lao
 */
TranslatorLocale.LO = "lo";
/**
 * Lithuanian
 */
TranslatorLocale.LT = "lt";
/**
 * Ganda
 */
TranslatorLocale.LUG = "lug";
/**
 * Latvian
 */
TranslatorLocale.LV = "lv";
/**
 * Maithili
 */
TranslatorLocale.MAI = "mai";
/**
 * Malagasy
 */
TranslatorLocale.MG = "mg";
/**
 * Māori
 */
TranslatorLocale.MI = "mi";
/**
 * Macedonian
 */
TranslatorLocale.MK = "mk";
/**
 * Malayalam
 */
TranslatorLocale.ML = "ml";
/**
 * Mongolian
 */
TranslatorLocale.MN = "mn";
/**
 * Manipuri
 */
TranslatorLocale.MNI = "mni";
/**
 * Marathi
 */
TranslatorLocale.MR = "mr";
/**
 * Malay
 */
TranslatorLocale.MS = "ms";
/**
 * Maltese
 */
TranslatorLocale.MT = "mt";
/**
 * Hmong Daw
 */
TranslatorLocale.MWW = "mww";
/**
 * Myanmar
 */
TranslatorLocale.MY = "my";
/**
 * Norwegian
 */
TranslatorLocale.NB = "nb";
/**
 * Nepali
 */
TranslatorLocale.NE = "ne";
/**
 * Dutch
 */
TranslatorLocale.NL = "nl";
/**
 * Sesotho sa Leboa
 */
TranslatorLocale.NSO = "nso";
/**
 * Nyanja
 */
TranslatorLocale.NYA = "nya";
/**
 * Odia
 */
TranslatorLocale.OR = "or";
/**
 * Querétaro Otomi
 */
TranslatorLocale.OTQ = "otq";
/**
 * Punjabi
 */
TranslatorLocale.PA = "pa";
/**
 * Polish
 */
TranslatorLocale.PL = "pl";
/**
 * Dari
 */
TranslatorLocale.PRS = "prs";
/**
 * Pashto
 */
TranslatorLocale.PS = "ps";
/**
 * Portuguese
 */
TranslatorLocale.PT = "pt";
/**
 * Romanian
 */
TranslatorLocale.RO = "ro";
/**
 * Russian
 */
TranslatorLocale.RU = "ru";
/**
 * Rundi
 */
TranslatorLocale.RUN = "run";
/**
 * Kinyarwanda
 */
TranslatorLocale.RW = "rw";
/**
 * Sindhi
 */
TranslatorLocale.SD = "sd";
/**
 * Sinhala
 */
TranslatorLocale.SI = "si";
/**
 * Slovak
 */
TranslatorLocale.SK = "sk";
/**
 * Slovenian
 */
TranslatorLocale.SL = "sl";
/**
 * Samoan
 */
TranslatorLocale.SM = "sm";
/**
 * Shona
 */
TranslatorLocale.SN = "sn";
/**
 * Somali
 */
TranslatorLocale.SO = "so";
/**
 * Albanian
 */
TranslatorLocale.SQ = "sq";
/**
 * Serbian
 */
TranslatorLocale.SR = "sr";
/**
 * Sesotho
 */
TranslatorLocale.ST = "st";
/**
 * Swedish
 */
TranslatorLocale.SV = "sv";
/**
 * Swahili
 */
TranslatorLocale.SW = "sw";
/**
 * Tamil
 */
TranslatorLocale.TA = "ta";
/**
 * Telugu
 */
TranslatorLocale.TE = "te";
/**
 * Thai
 */
TranslatorLocale.TH = "th";
/**
 * Tigrinya
 */
TranslatorLocale.TI = "ti";
/**
 * Turkmen
 */
TranslatorLocale.TK = "tk";
/**
 * Klingon
 */
TranslatorLocale.TLH = "tlh";
/**
 * Setswana
 */
TranslatorLocale.TN = "tn";
/**
 * Tongan
 */
TranslatorLocale.TO = "to";
/**
 * Turkish
 */
TranslatorLocale.TR = "tr";
/**
 * Tatar
 */
TranslatorLocale.TT = "tt";
/**
 * Tahitian
 */
TranslatorLocale.TY = "ty";
/**
 * Uyghur
 */
TranslatorLocale.UG = "ug";
/**
 * Ukrainian
 */
TranslatorLocale.UK = "uk";
/**
 * Urdu
 */
TranslatorLocale.UR = "ur";
/**
 * Uzbek
 */
TranslatorLocale.UZ = "uz";
/**
 * Vietnamese
 */
TranslatorLocale.VI = "vi";
/**
 * Xhosa
 */
TranslatorLocale.XH = "xh";
/**
 * Yoruba
 */
TranslatorLocale.YO = "yo";
/**
 * Yucatec Maya
 */
TranslatorLocale.YUA = "yua";
/**
 * Cantonese
 */
TranslatorLocale.YUE = "yue";
/**
 * Chinese
 */
TranslatorLocale.ZH = "zh";
/**
 * Zulu
 */
TranslatorLocale.ZU = "zu";
export {
  Translator,
  TranslatorLocale
};
//# sourceMappingURL=index.mjs.map