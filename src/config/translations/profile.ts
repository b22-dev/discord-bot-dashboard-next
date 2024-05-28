import { createI18n } from '@/utils/i18n';
import { common } from './common';
import { provider } from './provider';

export const profile = createI18n(provider, {
  en: {
    logout: common.translations.en.logout,
    language: 'Language',
    'language description': 'Select your language',
    settings: 'Settings',
    'dark mode': 'Dark Mode',
    'dark mode description': 'Enables dark theme in order to protect your eyes',

  },
  cn: {
    logout: common.translations.cn.logout,
    language: 'اللغة',
    'language description': 'اختر لغتك المفضلة',
    settings: 'الاعدادات',
    'dark mode': 'الوضع الليلي',
    'dark mode description': 'فعل الوضع الليلي لتحمي عينك من ضرر الشاشات الالكترونية',

  },
});
