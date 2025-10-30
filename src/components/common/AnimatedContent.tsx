import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  /**
   * Порог появления: 0 — сразу при входе в вьюпорт, 1 — когда элемент почти в центре
   * Используется для вычисления позиции старта ScrollTrigger
   */
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.6,
  delay = 0,
  onComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // eslint-disable-next-line no-console
    console.log('Запускаю анимацию появления элемента при скролле');

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    // Чем больше threshold, тем позже запустится анимация (когда элемент глубже во вьюпорте)
    const startPct = Math.max(0, Math.min(100, (1 - threshold) * 100));

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1
    });

    const tween = gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true,
        onRefreshInit: () => {
          // При ресайзе/рефреше восстанавливаем начальные значения
          gsap.set(el, {
            [axis]: offset,
            scale,
            opacity: animateOpacity ? initialOpacity : 1
          });
        }
      }
    });

    return () => {
      // Убиваем только свои сущности
      tween.scrollTrigger?.kill();
      gsap.killTweensOf(el);
      tween.kill();
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;


