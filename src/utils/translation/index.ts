import { default as i18next } from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import type { Namespace, KeyPrefix, UseTranslationOptions, UseTranslationResponse } from "react-i18next";

import resources from "./locale.json";

const DEFAULT_NAMESPACE = "common";

i18next.use(initReactI18next).init({
  resources: resources,
  defaultNS: DEFAULT_NAMESPACE,
  cleanCode: true,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function useAppTranslation<N extends Namespace = typeof DEFAULT_NAMESPACE, TKPrefix extends KeyPrefix<N> = undefined>(
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): UseTranslationResponse<N, TKPrefix> {
  return useTranslation<N, TKPrefix>(ns, options);
}

export { useAppTranslation, i18next };
