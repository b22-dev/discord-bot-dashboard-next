import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const guild = createI18n(provider, {
  en: {
    features: 'Features',
    banner: {
      title: 'Getting Started',
      description: 'Create your bot and type something',
    },
    error: {
      'not found': 'Where is it?',
      'not found description': "The bot can't access the server, let's invite him!",
      load: 'Failed to load guild',
    },
    bn: {
      'enable feature': 'Enable',
      'config feature': 'Config',
      invite: 'Invite bot',
      settings: 'Settings',
    },
  },
  cn: {
    features: 'المزايا',
    banner: {
      title: 'لنبدأ معا',
      description: 'حول خيالك لواقع',
    },
    error: {
      'not found': 'أي هي؟ ',
      'not found description': 'لا يمتلك البوت صلاحية لهذا السيرفر.. قم بدعوته',
      load: 'تعذر التعرف على هذا السيرفر',
    },
    bn: {
      'enable feature': 'تفعيل',
      'config feature': 'تعديل',
      invite: 'دعوة البوت',
      settings: 'الإعدادات',
    },
  },
});
