## MicrosoftTranslatorJS

Yet another library for translation!

A powerful, free translation library supporting a wide range of languages—many of which other services don't offer. No need for an Azure API key; it's entirely free and hassle-free!

## Installation:

```bash
npm install microsoft-translator
```

## Usage:

### ES Modules (ESM)

```javascript
import { Translator, TranslatorLocale } from "microsoft-translator";

let translator = new Translator();

let text = "Bienvenido a MicrosoftTranslator!";

let from = TranslatorLocale.AUTO_DETECT;
let to = TranslatorLocale.EN;

translator.translate(text, from, to).then((translatedText) => {
  console.log(translatedText);
});
```

### CommonJS

```javascript
const { Translator, TranslatorLocale } = require("microsoft-translator");

let translator = new Translator();

let text = "Bienvenido a MicrosoftTranslator!";

let from = TranslatorLocale.AUTO_DETECT;
let to = TranslatorLocale.EN;

translator.translate(text, from, to).then((translatedText) => {
  console.log(translatedText);
});
```
