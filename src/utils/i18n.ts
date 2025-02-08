import { APP_BLOG } from 'astrowind:config';

export const KNOWN_LANGUAGES = {
  'en': 'English',
  'zh': '中文',
} as const;

export const DEFAULT_LANGUAGE = 'en';

export function getLanguageFromURL(pathname: string){
  const langCodeMatch = pathname.match(/\/([a-z]{2})-?/);
  return langCodeMatch ? langCodeMatch[1] : DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof KNOWN_LANGUAGES) {
  return function t(key: string) {
    return translations[lang][key] || translations[DEFAULT_LANGUAGE][key];
  }
}

// 翻译文本
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    // ... 其他翻译
  },
  zh: {
    'nav.home': '首页',
    'nav.blog': '博客',
    'nav.about': '关于',
    // ... 其他翻译
  },
} as const;