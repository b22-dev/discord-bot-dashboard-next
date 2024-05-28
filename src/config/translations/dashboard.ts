import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const dashboard = createI18n(provider, {
  en: {
    pricing: 'Pricing',
    learn_more: 'Learn More',
    invite: {
      title: 'Invite our Bot',
      description: 'Try our discord bot with one-click',
      bn: 'Invite now',
    },
    servers: {
      title: 'Select Server',
      description: 'Select the server to configure',
    },
    vc: {
      create: 'Create a voice channel',
      'created channels': 'Created Voice channels',
    },
    command: {
      title: 'Command Usage',
      description: 'Use of commands of your server',
    },
  },
  cn: {
    pricing: 'الأسعار',
    learn_more: 'معرفة المزيد',
    invite: {
      title: 'دعوة البوت',
      description: 'حول خيالك إلى واقع بضغطة زر',
      bn: 'دعوة البوت',
    },
    servers: {
      title: 'اختر سيرفر',
      description: 'مكان تحويل خيالك إلى واقع',
    },
    vc: {
      create: 'إنشاء روم صوتي',
      'created channels': 'الرومات الصوتية التي تم إنشائها',
    },
    command: {
      title: 'استهلاك الأوامر',
      description: 'استهلاك الأوامر في سيرفرك',
    },
  },
});
