// Данные услуг для навигационного меню
export interface NavigationService {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const navigationServices: NavigationService[] = [
  { 
    id: 1, 
    icon: 'servicesIcons/icons-02.svg',
    title: 'Широкоформатная печать',
    description: 'Баннеры, вывески, щиты, уличные постеры, фасады, перетяжки.',
    link: '/services/wide-format-printing'
  },
  { 
    id: 2, 
    icon: 'servicesIcons/icons-03.svg',
    title: 'УФ-печать',
    description: 'Печать по твёрдым материалам: пластик, стекло, металл, дерево.',
    link: '/services/uv-printing'
  },
  { 
    id: 3, 
    icon: 'servicesIcons/icons-04.svg',
    title: 'Лазерная резка и гравировка',
    description: 'Изготовление табличек, шильд, брендирования сувениров.',
    link: '/services/laser-cutting-engraving'
  },
  { 
    id: 4, 
    icon: 'servicesIcons/icons-05.svg',
    title: 'Цифровая и офсетная печать',
    description: 'Визитки, каталоги, буклеты, листовки, журнал.',
    link: '/services/digital-offset-printing'
  },
  { 
    id: 5, 
    icon: 'servicesIcons/icons-06.svg',
    title: 'Плоттерная и контурная резка',
    description: 'Самоклейка, плёнки, винил, контуры под наклейки и вывески.',
    link: '/services/plotter-cutting'
  },
  { 
    id: 6, 
    icon: 'servicesIcons/icons-07.svg',
    title: 'Сублимационная печать',
    description: 'футболки, кружки, сувенирка, флаги.',
    link: '/services/sublimation-printing'
  },
  { 
    id: 7, 
    icon: 'servicesIcons/icons-08.svg',
    title: 'Термотрансфер и тиснение',
    description: 'Горячие технологии переноса и декоративные элементы.',
    link: '/services/heat-transfer-embossing' 
  },
  { 
    id: 8, 
    icon: 'servicesIcons/icons-09.svg',
    title: 'Тампопечать',
    description: 'Нанесение на неровные и мелкие поверхности (ручки, флешки и т.д.).',
    link: '/services/pad-printing'
  },
  { 
    id: 9, 
    icon: 'servicesIcons/icons-10.svg',
    title: 'Шелкография',
    description: 'Печать на текстиле, пакетах, коробках и рекламной продукции.',
    link: '/services/screen-printing'
  },
  { 
    id: 10, 
    icon: 'servicesIcons/icons-11.svg',
    title: 'Флексопечать',
    description: 'Упаковка, этикетки, самоклеящиеся материалы.',
    link: '/services/flexographic-printing'
  },
  { 
    id: 11, 
    icon: 'servicesIcons/icons-12.svg',
    title: 'Ламинирование и биговка',
    description: 'Постпечатная обработка, защита, подготовка к сгибу и фальцовке.',
    link: '/services/lamination-scoring'
  },
  { 
    id: 12, 
    icon: 'servicesIcons/icons-13.svg',
    title: 'Наружная реклама',
    description: 'Изготовление вывесок, лайбоксов, табличек, стендов, объёмных букв и рекламных конструкций.',
    link: '/services/outdoor-advertising'
  }
];

