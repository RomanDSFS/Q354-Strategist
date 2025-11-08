// src/i18n/translations.ts
export type Language = 'en' | 'ru';

export const translations = {
  ru: {
    // Общие
    aboutUs: 'О нас',
    fund: 'Фонд исследований будущего',
    studio: 'Студия стартапов',
    foresight: 'Форсайт',
    decisionMaker: 'Принятие решений',
    checkIdea: 'Проверка идеи',
    language: 'RU',
    studioToggle: 'Перейти на сайт',
    // Страница Фонда
    fundDescription:
      'Некоммерческая исследовательская организация, специализирующаяся на системном мониторинге глобальных тенденций, выявлении слабых сигналов и построении сценариев долгосрочного развития. Деятельность Фонда основана на методологиях горизонтального сканирования, анализе мегатрендов и междисциплинарных подходах к стратегическому прогнозированию. Результаты исследований предназначены для информирования стратегических решений в государственном и корпоративном секторах.',
    homePageDescription:
     'Команда стратегов, дизайнеров и разработчиков, изучающая возможные варианты будущего и создающая открытые инструменты для его осмысления. Миссия — помогать выявлять слабые сигналы, принимать обоснованные стратегические решения и разрабатывать устойчивые сценарии развития. ',
    footer: 'Если вы хотите присоединиться к нашему сообществу и проектам, вы можете сделать это на любом этапе и в любой области инструментов, которые мы разрабатываем. Также вы можете бесплатно использовать любой из наших инструментов. Присоединяйтесь к нам и станьте частью общего пути!',
    studioDescription:
     'Операционное подразделение, реализующее прикладные инновационные проекты на основе данных о будущем. Студия занимается разработкой, валидацией и запуском технологических стартапов, ориентированных на решение системных вызовов, выявленных в ходе фундаментальных исследований. Процесс создания стартапов включает этапы выявления перспективных рыночных и социальных возможностей, прототипирования, разработки минимально жизнеспособного продукта (MVP) и подготовки к масштабированию в соответствии с принципами бережливого предпринимательства и инноваций, основанных на доказательствах.'
    },
  en: {
    // Общие
    aboutUs: 'About Us',
    fund: 'Future Research Foundation',
    studio: 'Startup Studio',
    foresight: 'Foresight',
    decisionMaker: 'Decision Making',
    checkIdea: 'Check Idea',
    language: 'EN',
    studioToggle: 'Visit Startup Studio',

    // Fund page
    fundDescription:
      'A non-profit research organization specializing in systematic horizon scanning, weak signal detection, and the development of long-term strategic scenarios. The Foundation employs interdisciplinary methodologies—including trend analysis, megatrends assessment, and scenario planning—to generate evidence-based foresight. Its outputs support strategic decision-making in public policy, corporate strategy, and institutional planning.',
    homePageDescription:
    'A team of strategists, designers, and developers exploring plausible futures and building open tools to make sense of them. Our mission is to help organizations detect weak signals, make evidence-based strategic decisions, and develop resilient future scenarios.',
    footer: 'If you want to join our community and projects, you can do so at any stage and in any area of the tools we develop. You can also use any of our tools for free. Join us and become part of the journey!',
    studioDescription:
     'An operational unit that translates foresight insights into applied innovation. The Studio designs, validates, and launches technology-driven startups addressing systemic challenges identified through foundational research. The venture development process includes opportunity identification, rapid prototyping, minimum viable product (MVP) development, and scalability preparation—guided by principles of lean entrepreneurship and evidence-based innovation.'
    },
};