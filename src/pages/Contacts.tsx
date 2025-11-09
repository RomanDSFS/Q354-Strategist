// src/pages/Contacts.tsx
import { useLanguage } from '../i18n/LanguageContext';

export const Contacts = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl text-gray-200 font-bold mb-6">{t('contacts')}</h1>
      <div className="text-lg text-gray-200 max-w-4xl space-y-4">
        <p>{t('contactsDescription')}</p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href="mailto:contact@q354.org"
            className="text-blue-400 hover:underline"
          >
            Qhoja@proton.me
          </a>
        </p>
        {/* Добавь другие контакты при необходимости: Telegram, LinkedIn и т.д. */}
      </div>
    </div>
  );
};