// src/i18n/LanguageContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from './translations';
import { translations } from './translations';

type LanguageContextType = {
  lang: Language;
  t: (key: keyof (typeof translations)['ru']) => string;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'en' || saved === 'ru' ? saved : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
    console.log('Language changed to:', lang);
  }, [lang]);

  const t = (key: keyof (typeof translations)['ru']): string => {
    return translations[lang][key];
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};