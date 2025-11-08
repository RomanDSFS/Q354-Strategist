// src/components/layout/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageToggle } from '../ui/LanguageToggle';

// Внешние ссылки
const foresightTools = [
  { name: '6 Tools Site', url: 'https://q354sight.vercel.app' },
  //{ name: 'Scenario Analysis', url: 'https://foresight-scenario-analysis.vercel.app' },
];

const decisionMakers = [
  { name: '3 Tools Site', url: 'https://q354decision-makers.vercel.app/' },
];

const checkIdeaTools = [{
  name: `12 Tools Site`,
  url: `https://q354-idea-validation-toolkit.vercel.app`,
}];

export const Header = () => {
  const { t } = useLanguage();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-gray-200 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Логотип */}
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2 hover:text-gray-400 transition">
          <img
            src="/logo.png"
            alt="Q354 Logo"
            className="h-14 w-auto" // Настрой размер по желанию: h-8 = 32px, h-10 = 40px и т.д.
          />
          <span className="text-xl font-bold">Q354</span>
        </Link>

        {/* Мобильный гамбургер */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-1 relative">
          <Link
            to="/fund"
            className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
          >
            {t('fund')}
          </Link>

          <Link
            to="/studio"
            className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
            onClick={closeMenus}
          >
            {t('studio')}
          </Link>

          {/* Форсайт */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('foresight')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
            >
              {t('foresight')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'foresight' && (
              <div className="absolute left-0 mt-1 w-48 bg-gray-700 text-white shadow-lg rounded-md z-10">
                {foresightTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                    onClick={closeMenus}
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Десижн мейкер */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('design')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
            >
              {t('decisionMaker')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'design' && (
              <div className="absolute left-0 mt-1 w-48 bg-gray-700 text-white shadow-lg rounded-md z-10">
                {decisionMakers.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600"
                    onClick={closeMenus}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Чек идея */}
          <div className="relative">
            <button
              onClick={() => toggleMenu('checkIdea')}
              className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center gap-1"
            >
              {t('checkIdea')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openMenu === 'checkIdea' && (
              <div className="absolute left-0 mt-1 w-48 bg-gray-700 text-white shadow-lg rounded-md z-10 max-h-60 overflow-y-auto">
                {checkIdeaTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-gray-600 whitespace-nowrap"
                    onClick={closeMenus}
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Переключатель языка */}
          <LanguageToggle />
        </nav>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg z-40">
            <div className="flex flex-col p-4 space-y-3">
              <Link
                to="/fund"
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
                onClick={closeMenus}
              >
                {t('fund')}
              </Link>

              <Link
                to="/studio"
                className="px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition"
                onClick={closeMenus}
              >
                {t('studio')}
              </Link>

              {/* Выпадашки для мобильного */}
              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('foresight')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                >
                  {t('foresight')}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${openMenu === 'foresight' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'foresight' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {foresightTools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('design')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                >
                  {t('decisionMaker')}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${openMenu === 'design' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'design' && (
                  <div className="ml-4 mt-2 space-y-1">
                    {decisionMakers.map((item) => (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <button
                  onClick={() => toggleMenu('checkIdea')}
                  className="w-full text-left px-3 py-2 text-sm font-medium rounded hover:bg-gray-700 transition flex items-center justify-between"
                >
                  {t('checkIdea')}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${openMenu === 'checkIdea' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openMenu === 'checkIdea' && (
                  <div className="ml-4 mt-2 space-y-1 max-h-32 overflow-y-auto">
                    {checkIdeaTools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-1 text-xs hover:bg-gray-700 rounded"
                        onClick={closeMenus}
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 pt-3">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};