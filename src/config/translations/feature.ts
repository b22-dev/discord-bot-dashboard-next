import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const feature = createI18n(provider, {
  en: {
    unsaved: 'Save Changes',
    error: {
      'not enabled': 'Not Enabled',
      'not enabled description': 'Try enable this feature?',
      'not found': 'Not Found',
      'not found description': "Hmm... Weird we can't find it",
    },
    bn: {
      enable: 'Enable Feature',
      disable: 'Disable',
      save: 'Save',
      discard: 'Discard',
    },
  },
  cn: {
    unsaved: 'حفظ التغييرات',
    error: {
      'not enabled': 'غير مفعل',
      'not enabled description': 'جرب تفعيل هذه الميزة الحصرية؟',
      'not found': 'تعذر العثور',
      'not found description': 'هممم... لا يمكننا إيجاد ما تريد',
    },
    bn: {
      enable: 'تفعيل الميزة',
      disable: 'إلغاء التفعيل',
      save: 'حفظ',
      discard: 'تجاهل',
    },
  },
});
