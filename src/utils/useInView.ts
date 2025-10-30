import { useEffect, useRef, useState } from 'react';

/**
 * Хук для отслеживания видимости элемента в области просмотра с помощью IntersectionObserver
 * Логи и комментарии на русском по правилам проекта
 */
export function useInView(options?: IntersectionObserverInit) {
  const targetRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    if (!targetRef.current) return;

    // Лог: инициализация наблюдателя
    // eslint-disable-next-line no-console
    console.log('Инициализирую IntersectionObserver для элемента');

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // Лог: изменение видимости
      // eslint-disable-next-line no-console
      console.log('Изменение видимости элемента:', entry.isIntersecting);
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref: targetRef, inView } as const;
}


