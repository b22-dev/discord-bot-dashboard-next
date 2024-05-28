import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const common = createI18n(provider, {
  en: {
    loading: 'Loading',
    search: 'Search',
    'select lang': 'Select your language',
    'select role': 'Select a role',
    'select channel': 'Select a channel',
    dashboard: 'Dashboard',
    profile: 'Profile',
    pages: 'Pages',
    logout: 'Logout',
  },
  cn: {
    loading: 'جاري التحميل...',
    search: 'البحث',
    'select lang': 'اختر لغتك',
    'select role': 'اختر رتبة',
    'select channel': 'اختر روم',
    dashboard: 'لوحة التحكم',
    profile: 'الحساب',
    pages: 'الصفحات',
    logout: 'تسجيل الخروج',
  },
});
