import React from 'react';
import PrintingHero from '../components/sections/PrintingHero';
import QuickRequest from '../components/sections/QuickRequest';
import ServiceInfoBlock from '../components/sections/ServiceInfoBlock';
import PricingTables from '../components/sections/PricingTables';
import ServiceCards from '../components/sections/ServiceCards';

const Printing: React.FC = () => {
  return (
    <div>
      <PrintingHero 
        src="/images/printingExample.png"
        title="Широкоформатная печать"
        description="Профессиональная печать для вашего бизнеса"
      />
      <QuickRequest />
      <ServiceInfoBlock 
        src="/images/mock-technology.jpg"
        title="Технология широкоформатной печати"
        description="Широкоформатная печать — современный цифровой способ создания изображений большого формата с предельно чёткой детализацией и насыщенными цветами."
        features={[
          "Современные технологии для высококачественной печати",
          "Широкий выбор материалов для любых нужд",
          "Быстрое выполнение заказов любой сложности"
        ]}
        inverse={false}
      />
      <PricingTables />
      <ServiceCards
        title="Области применения широкоформатной печати"
        description="Широкоформатная печать используется там, где важно привлечь внимание и создать визуальное воздействие. Она охватывает всё — от уличных баннеров и фасадов до интерьерных постеров и навигации в помещениях. Универсальность и масштаб делают её незаменимой в современном визуальном дизайне."
        cards={[
          {
            icon: '/icons/mock-banner.svg',
            text: 'Баннеры, вывески, щиты, уличные постеры, перетяжки'
          },
          {
            icon: '/icons/mock-facade.svg',
            text: 'Оформление фасадов и витрин'
          },
          {
            icon: '/icons/mock-stand.svg',
            text: 'Рекламные, выстовочные стенды и POS-материалы: постери, наклейки, дисплеи, указатели'
          }
        ]}
      />
    </div>
  );
};

export default Printing; 