import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import styles from './ServiceDetail.module.scss';
import PrintingHero from '../components/sections/PrintingHero';
import QuickRequest from '../components/sections/QuickRequest';
import ServiceInfoBlock from '../components/sections/ServiceInfoBlock';
import ServiceCards from '../components/sections/ServiceCards';
import ServiceSteps from '../components/sections/ServiceSteps';

type HeroBlock = {
  type: 'hero';
  image?: string;
  title: string;
  description?: string;
};

type InfoBlock = {
  type: 'info';
  inverse?: boolean;
  title: string;
  description?: string;
  features?: string[];
  image?: string;
};

type CardsBlock = {
  type: 'cards';
  title: string;
  description?: string;
  cards: { icon?: string; text: string }[];
};

type StepsBlock = {
  type: 'steps';
  title: string;
  description?: string;
  steps: { icon?: string; title: string; description?: string }[];
};

type ServicePageData = {
  name: string;
  title: string;
  blocks: Array<HeroBlock | InfoBlock | CardsBlock | StepsBlock>;
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<ServicePageData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  const jsonPath = useMemo(() => `/services/${id}.json`, [id]);

  useEffect(() => {
    if (!id) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setNotFound(false);

    fetch(jsonPath)
      .then(async (res) => {
        if (!res.ok) {
          // Если 404, показываем страницу NotFound
          if (res.status === 404) {
            setNotFound(true);
          } else {
            throw new Error(`Не удалось загрузить JSON: ${res.status}`);
          }
          return;
        }
        const body = (await res.json()) as ServicePageData;
        setData(body);
      })
      .catch((e: unknown) => {
        console.log('Ошибка загрузки JSON страницы услуги:', e);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id, jsonPath]);

  if (loading) {
    return (
      <div className={styles.servicePage}>
        <div className={styles.container}>Загрузка...</div>
      </div>
    );
  }

  if (notFound || !data) {
    return <NotFound />;
  }

  return (
    <div>
        {data.blocks.map((block, idx) => {
          switch (block.type) {
            case 'hero': {
              const b = block as HeroBlock;
              return (
                <React.Fragment key={`hero-${idx}`}>
                  <PrintingHero src={b.image || ''} title={b.title} description={b.description || ''}/>
                  <QuickRequest />
                </React.Fragment>
              );
              // return (
              //   <section key={`hero-${idx}`} className={styles.hero}>
              //     {b.image ? (
              //       <img src={b.image} alt={b.title} className={styles.heroImage} />
              //     ) : (
              //       <div className={styles.heroImage} />
              //     )}
              //     <div className={styles.heroContent}>
              //       <h1>{b.title}</h1>
              //       {b.description && <p>{b.description}</p>}
              //     </div>
              //   </section>
              // );
            }

            case 'info': {
              const b = block as InfoBlock;
              return (
                <ServiceInfoBlock
                  key={`info-${idx}`}
                  src={b.image || ''}
                  title={b.title}
                  inverse={b.inverse || false}
                  description={b.description || ''}
                  features={b.features || []}
                />
              );
            }

            case 'cards': {
              const b = block as CardsBlock;
              return (
                <ServiceCards
                  key={`cards-${idx}`}
                  title={b.title}
                  description={b.description}
                  cards={b.cards}
                />
              );
            }

            case 'steps': {
              const b = block as StepsBlock;
              return (
                <ServiceSteps
                  key={`steps-${idx}`}
                  title={b.title}
                  description={b.description}
                  steps={b.steps}
                />
              );
            }

            default:
              return null;
          }
        })}
    </div>
  );
};

export default ServiceDetail; 