import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationGetters } from '../translations';
import { AppLanguage } from '../../enums';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { kAppLanguage } from '../../constants';

/**
 * Return the current language of i18n
 * @returns current language
 */
const getI18nLocale = (): string => {
  return i18n.language;
};

const i18nTranslator = (
  key: string,
  defaultValue?: string,
  params?: any,
): string | null => {
  return i18n.t(key, defaultValue || '', params);
};

/**
 * Initiate the i18n
 * * NOTE : Invoke function at the app startup place, and don't put at the react component
 */
const initI18n = async (): Promise<void> => {
  let lang: string | null = AppLanguage.en;

  const resources = {
    en: {
      translation: { ...translationGetters.en },
    },
    si: {
      translation: { ...translationGetters.si },
    },
    ta: {
      translation: { ...translationGetters.ta },
    },
  };

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: lang,
    fallbackLng: AppLanguage.en,
    interpolation: { escapeValue: false },
    resources,
  });

  try {
    // get the language by local storage
    lang = await AsyncStorage.getItem(kAppLanguage);

    if (lang) {
      i18n.changeLanguage(lang);
    }
  } catch (error) {
    console.log('Init i18n ERR ::: ', error);
  }
};

/**
 * Change the language and save the language in local storage
 * @param lang language
 */
const changeI18nLanguage = (lang: string) => {
  i18n.changeLanguage(lang);
  AsyncStorage.setItem(kAppLanguage, lang);
};

export { initI18n, getI18nLocale, i18nTranslator, changeI18nLanguage };
