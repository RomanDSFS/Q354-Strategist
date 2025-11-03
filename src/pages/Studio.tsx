// src/pages/Studio.tsx
import { useLanguage } from '../i18n/LanguageContext';

export const Studio = () => {
  const { t } = useLanguage();
  const studioUrl = 'https://q354-startup-studio.vercel.app/'; // ← замени на свой

  const openStudio = () => {
    window.open(studioUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-gray-200">{t('studio')}</h1>
      <p className="text-lg text-gray-200 max-w-4xl mb-6">
       {t('studioDescription')}
       </p>
      <button
        onClick={openStudio}
        className="px-6 py-3 bg-blue-700 text-gray-200 font-medium rounded hover:bg-blue-800 transition"
      >
       {t('studioToggle')}
      </button>
    </div>
  );
};