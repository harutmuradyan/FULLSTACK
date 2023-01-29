import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TransitionEn from "../transitions/en/common";
import TransitionRu from "../transitions/ru/common";
import TransitionHy from "../transitions/hy/common";

i18n
  .use(initReactI18next) 
  .init({
    
    resources: {
      en: TransitionEn,
      ru :TransitionRu,
      hy :TransitionHy
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });