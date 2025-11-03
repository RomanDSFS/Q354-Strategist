// src/pages/Fund.tsx
import { useLanguage } from '../i18n/LanguageContext';

export const Fund = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-gray-200 font-bold mb-6">{t('fund')}</h1>
      <p className="text-lg text-gray-200 max-w-4xl">
        {t('fundDescription')}
      </p>
    </div>
  );
};