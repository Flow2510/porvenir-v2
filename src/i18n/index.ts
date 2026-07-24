import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import es from "./locales/es.json";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ["en", "fr", "es"],
        resources: {
            en: {
                translation: en,
            },
            fr: {
                translation: fr,
            },
            es: {
                translation: es,
            },
        },

        fallbackLng: "en",

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;