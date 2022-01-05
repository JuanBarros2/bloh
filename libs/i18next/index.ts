import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from "./locales/pt";
import { en } from './locales/en';

const resources = {
  pt,
  en
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
