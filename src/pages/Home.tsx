// src/pages/Home.tsx
import { useLanguage } from '../i18n/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-gray-200 font-bold mb-6">{t('aboutUs')}</h1>
      <p className="text-lg text-start text-gray-200 font-serif max-w-3xl mb-12">
         {t('homePageDescription')}
      </p>
      <p className="text-lg text-right text-gray-100 font-serif max-w-3xl">
         {t('footer')}
      </p>
    </div>
  );
};