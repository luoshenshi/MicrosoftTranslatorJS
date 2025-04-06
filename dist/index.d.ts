declare class Translator {
    private networkClient;
    private static readonly SECRET_KEY;
    translate(text: string, from: string, to: string): Promise<string>;
    private clientTraceId;
    private generateSignature;
    private getTimestamp;
}

declare class TranslatorLocale {
    /**
     * AutoDetect Language
     */
    static AUTO_DETECT: string;
    /**
     * Afrikaans
     */
    static AF: string;
    /**
     * Amharic
     */
    static AM: string;
    /**
     * Arabic
     */
    static AR: string;
    /**
     * Assamese
     */
    static AS: string;
    /**
     * Azerbaijani
     */
    static AZ: string;
    /**
     * Bashkir
     */
    static BA: string;
    /**
     * Bulgarian
     */
    static BG: string;
    /**
     * Bhojpuri
     */
    static BHO: string;
    /**
     * Bangla
     */
    static BN: string;
    /**
     * Tibetan
     */
    static BO: string;
    /**
     * Bodo
     */
    static BRX: string;
    /**
     * Bosnian
     */
    static BS: string;
    /**
     * Catalan
     */
    static CA: string;
    /**
     * Czech
     */
    static CS: string;
    /**
     * Welsh
     */
    static CY: string;
    /**
     * Danish
     */
    static DA: string;
    /**
     * German
     */
    static DE: string;
    /**
     * Dogri
     */
    static DOI: string;
    /**
     * Lower Sorbian
     */
    static DSB: string;
    /**
     * Divehi
     */
    static DV: string;
    /**
     * Greek
     */
    static EL: string;
    /**
     * English
     */
    static EN: string;
    /**
     * Spanish
     */
    static ES: string;
    /**
     * Estonian
     */
    static ET: string;
    /**
     * Basque
     */
    static EU: string;
    /**
     * Persian
     */
    static FA: string;
    /**
     * Finnish
     */
    static FI: string;
    /**
     * Filipino
     */
    static FIL: string;
    /**
     * Fijian
     */
    static FJ: string;
    /**
     * Faroese
     */
    static FO: string;
    /**
     * French
     */
    static FR: string;
    /**
     * Irish
     */
    static GA: string;
    /**
     * Galician
     */
    static GL: string;
    /**
     * Konkani
     */
    static GOM: string;
    /**
     * Gujarati
     */
    static GU: string;
    /**
     * Hausa
     */
    static HA: string;
    /**
     * Hebrew
     */
    static HE: string;
    /**
     * Hindi
     */
    static HI: string;
    /**
     * Chhattisgarhi
     */
    static HNE: string;
    /**
     * Croatian
     */
    static HR: string;
    /**
     * Upper Sorbian
     */
    static HSB: string;
    /**
     * Haitian Creole
     */
    static HT: string;
    /**
     * Hungarian
     */
    static HU: string;
    /**
     * Armenian
     */
    static HY: string;
    /**
     * Indonesian
     */
    static ID: string;
    /**
     * Igbo
     */
    static IG: string;
    /**
     * Inuinnaqtun
     */
    static IKT: string;
    /**
     * Icelandic
     */
    static IS: string;
    /**
     * Italian
     */
    static IT: string;
    /**
     * Inuktitut
     */
    static IU: string;
    /**
     * Inuktitut (Latin)
     */
    static IU_LATN: string;
    /**
     * Japanese
     */
    static JA: string;
    /**
     * Georgian
     */
    static KA: string;
    /**
     * Kazakh
     */
    static KK: string;
    /**
     * Khmer
     */
    static KM: string;
    /**
     * Kannada
     */
    static KN: string;
    /**
     * Korean
     */
    static KO: string;
    /**
     * Kashmiri
     */
    static KS: string;
    /**
     * Kurdish
     */
    static KU: string;
    /**
     * Kyrgyz
     */
    static KY: string;
    /**
     * Lingala
     */
    static LN: string;
    /**
     * Lao
     */
    static LO: string;
    /**
     * Lithuanian
     */
    static LT: string;
    /**
     * Ganda
     */
    static LUG: string;
    /**
     * Latvian
     */
    static LV: string;
    /**
     * Maithili
     */
    static MAI: string;
    /**
     * Malagasy
     */
    static MG: string;
    /**
     * Māori
     */
    static MI: string;
    /**
     * Macedonian
     */
    static MK: string;
    /**
     * Malayalam
     */
    static ML: string;
    /**
     * Mongolian
     */
    static MN: string;
    /**
     * Manipuri
     */
    static MNI: string;
    /**
     * Marathi
     */
    static MR: string;
    /**
     * Malay
     */
    static MS: string;
    /**
     * Maltese
     */
    static MT: string;
    /**
     * Hmong Daw
     */
    static MWW: string;
    /**
     * Myanmar
     */
    static MY: string;
    /**
     * Norwegian
     */
    static NB: string;
    /**
     * Nepali
     */
    static NE: string;
    /**
     * Dutch
     */
    static NL: string;
    /**
     * Sesotho sa Leboa
     */
    static NSO: string;
    /**
     * Nyanja
     */
    static NYA: string;
    /**
     * Odia
     */
    static OR: string;
    /**
     * Querétaro Otomi
     */
    static OTQ: string;
    /**
     * Punjabi
     */
    static PA: string;
    /**
     * Polish
     */
    static PL: string;
    /**
     * Dari
     */
    static PRS: string;
    /**
     * Pashto
     */
    static PS: string;
    /**
     * Portuguese
     */
    static PT: string;
    /**
     * Romanian
     */
    static RO: string;
    /**
     * Russian
     */
    static RU: string;
    /**
     * Rundi
     */
    static RUN: string;
    /**
     * Kinyarwanda
     */
    static RW: string;
    /**
     * Sindhi
     */
    static SD: string;
    /**
     * Sinhala
     */
    static SI: string;
    /**
     * Slovak
     */
    static SK: string;
    /**
     * Slovenian
     */
    static SL: string;
    /**
     * Samoan
     */
    static SM: string;
    /**
     * Shona
     */
    static SN: string;
    /**
     * Somali
     */
    static SO: string;
    /**
     * Albanian
     */
    static SQ: string;
    /**
     * Serbian
     */
    static SR: string;
    /**
     * Sesotho
     */
    static ST: string;
    /**
     * Swedish
     */
    static SV: string;
    /**
     * Swahili
     */
    static SW: string;
    /**
     * Tamil
     */
    static TA: string;
    /**
     * Telugu
     */
    static TE: string;
    /**
     * Thai
     */
    static TH: string;
    /**
     * Tigrinya
     */
    static TI: string;
    /**
     * Turkmen
     */
    static TK: string;
    /**
     * Klingon
     */
    static TLH: string;
    /**
     * Setswana
     */
    static TN: string;
    /**
     * Tongan
     */
    static TO: string;
    /**
     * Turkish
     */
    static TR: string;
    /**
     * Tatar
     */
    static TT: string;
    /**
     * Tahitian
     */
    static TY: string;
    /**
     * Uyghur
     */
    static UG: string;
    /**
     * Ukrainian
     */
    static UK: string;
    /**
     * Urdu
     */
    static UR: string;
    /**
     * Uzbek
     */
    static UZ: string;
    /**
     * Vietnamese
     */
    static VI: string;
    /**
     * Xhosa
     */
    static XH: string;
    /**
     * Yoruba
     */
    static YO: string;
    /**
     * Yucatec Maya
     */
    static YUA: string;
    /**
     * Cantonese
     */
    static YUE: string;
    /**
     * Chinese
     */
    static ZH: string;
    /**
     * Zulu
     */
    static ZU: string;
}

export { Translator, TranslatorLocale };
