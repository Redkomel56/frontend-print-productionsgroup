import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import OurHistory from '../components/sections/OurHistory';
import ServiceInfoBlock from '../components/sections/ServiceInfoBlock';
import OurAchievements from '../components/sections/OurAchievements';

const About: React.FC = () => {
  // Данные для блоков с использованием ServiceInfoBlock
  const aboutBlocks = [
    {
      title: 'Что мы делаем',
      description: 'Мы предлагаем весь спектр услуг цифровой, широкоформатной и УФ-печати, а также лазерную резку, гравировку, плоттерную резку, тиснение, термоперенос, сублимацию и постпечатную обработку. В нашем арсенале — мощное современное оборудование, высокоточные плоттеры, лазеры и принтеры, работающие с любыми материалами: от бумаги и пластика до дерева, стекла и металла. Благодаря собственной производственной базе мы гарантируем:',
      features: [
        'безупречную цветопередачу,',
        'точность реза до миллиметра,',
        'надёжность и долговечность каждой партии,',
        'стабильное качество на любых объёмах.'
      ],
      image: '/images/about/info1.png', // Будет добавлено позже
      inverse: false
    },
    {
      title: 'Наша философия',
      description: 'Мы не делаем «просто печать». Мы создаём инструменты визуального воздействия, которые работают на бренд, вызывают эмоции и запоминаются. Каждый проект начинается с идеи — и заканчивается восторгом клиента. Мы не боимся сложных задач — наоборот, они нас заводят. Хотите 10 000 каталогов за три дня? Сделаем. Нужен сложный макет для выставки — выспимся потом. Когда другие ищут отговорки — мы ищем решения.',
      features: [],
      image: '/images/about/info2.png', // Будет добавлено позже
      inverse: true
    },
    {
      title: 'Почему выбирают нас',
      description: '',
      features: [
        '6 лет на рынке. С 2019 года мы не просто работаем — мы развиваемся, инвестируем в оборудование, людей и технологии.',
        'Собственное производство. Всё под контролем — от дизайна до упаковки.',
        'Скорость и ответственность. Мы понимаем, что для бизнеса время — деньги.',
        'Качество без компромиссов. Мы не экономим на материалах, потому что знаем: дешевле — значит хуже.',
        'Поддержка и сервис. Мы всегда на связи, подскажем, предложим, адаптируем.'
      ],
      image: '/images/about/info3.png', // Будет добавлено позже
      inverse: false
    }
  ];

  return (
    <div>
      <AboutHero />
      <OurHistory />
      {aboutBlocks.map((block, index) => (
        <ServiceInfoBlock
          key={`about-block-${index}`}
          src={block.image}
          title={block.title}
          description={block.description}
          features={block.features}
          inverse={block.inverse}
        />
      ))}
      <OurAchievements />
    </div>
  );
};

export default About; 