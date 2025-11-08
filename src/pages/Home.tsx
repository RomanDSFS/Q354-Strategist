// src/pages/Home.tsx
import { useLanguage } from '../i18n/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12 relative min-h-screen overflow-hidden bg-[#01062d]">
      {/* Парящий логотип — оставляем как есть */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 animate-float">
        <img
          src="/logo.png"
          alt="Q354 Logo"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg drop-shadow-2xl"
          style={{
            filter: 'brightness(0.7) contrast(1.2)',
          }}
        />
      </div>

      {/* Полупрозрачный слой (можно добавить, если нужен контраст) */}
      <div className="absolute inset-0 "></div>

      {/* Контент — сдвинут вправо */}
      <div className="relative z-10 ml-auto max-w-2xl text-gray-200 ">
        <h1 className="text-3xl font-bold mb-6">{t('aboutUs')}</h1>
        <p className="text-lg font-serif text-right mb-12">
          {t('homePageDescription')}
        </p>
        <p className="text-lg font-medium italic text-right">
          {t('footer')}
        </p>
      </div>
    </div>
  );
};