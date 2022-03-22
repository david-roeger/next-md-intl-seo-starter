import { LOCALES } from "./constants";
import de from "./de.json";
import en from "./en.json";

export const t = (key, locale) => {
  switch (locale) {
    case LOCALES.DE:
      return de[key] ?? en[key] ?? key;
      break;
    case LOCALES.EN:
      return en[key] ?? key;
    default:
      return key;
      break;
  }
};
