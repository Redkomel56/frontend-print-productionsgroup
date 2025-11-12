import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrintingHero from '../components/sections/PrintingHero';
import { navigationServices } from '../data/navigationServices';
import styles from './Services.module.scss';

type HeroBlock = {
  type: 'hero';
  image?: string;
  title: string;
  description?: string;
};

type ServicePageData = {
  name: string;
  title: string;
  blocks: Array<HeroBlock | any>;
};

type ServiceHeroBlock = {
  block: HeroBlock;
  serviceId: string;
  serviceLink: string;
};

const Services: React.FC = () => {
  const [heroBlocks, setHeroBlocks] = useState<ServiceHeroBlock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Загружаем все JSON файлы услуг и извлекаем hero блоки
    const loadServices = async () => {
      try {
        const serviceIds = navigationServices.map(service => {
          // Извлекаем ID из ссылки (например, /services/wide-format-printing -> wide-format-printing)
          return service.link.replace('/services/', '');
        });

        const heroBlocksPromises = serviceIds.map(async (id, index) => {
          try {
            const response = await fetch(`/services/${id}.json`);
            if (!response.ok) {
              console.warn(`Не удалось загрузить услугу: ${id}`);
              return null;
            }
            const data: ServicePageData = await response.json();
            // Находим первый hero блок
            const heroBlock = data.blocks.find((block: any) => block.type === 'hero') as HeroBlock | undefined;
            if (heroBlock) {
              return {
                block: heroBlock,
                serviceId: id,
                serviceLink: navigationServices[index]?.link || `/services/${id}`
              };
            }
            return null;
          } catch (error) {
            console.warn(`Ошибка загрузки услуги ${id}:`, error);
            return null;
          }
        });

        const loadedHeroBlocks = await Promise.all(heroBlocksPromises);
        // Фильтруем null значения
        const validHeroBlocks = loadedHeroBlocks.filter((block): block is ServiceHeroBlock => block !== null);
        setHeroBlocks(validHeroBlocks);
      } catch (error) {
        console.error('Ошибка загрузки услуг:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return (
      <div className={styles.servicesPage}>
        <div className={styles.container}>Загрузка...</div>
      </div>
    );
  }

  return (
    <div className={styles.servicesPage}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Наши услуги</h1>
          <p className={styles.description}>
            Print Productions Group предлагает полный спектр полиграфических услуг и решений для вашего бизнеса. 
            От широкоформатной печати до лазерной гравировки — мы обеспечиваем качество и профессионализм на каждом этапе работы.
          </p>
        </div>
      </div>
      
      <div className={styles.heroBlocks}>
        {heroBlocks.map((serviceHero, index) => (
          <Link
            key={`hero-${index}`}
            to={serviceHero.serviceLink}
            className={styles.heroLink}
          >
            <PrintingHero
              src={serviceHero.block.image || ''}
              title={serviceHero.block.title}
              description={serviceHero.block.description || ''}
              noMargin={true}
              rounded={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
