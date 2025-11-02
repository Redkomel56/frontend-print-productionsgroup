// ВНИМАНИЕ: Логи на русском согласно правилам пользователя

let ymapsPromise: Promise<NonNullable<typeof window.ymaps>> | null = null;

export function loadYmaps(apiKey: string, lang: string = 'ru_RU'): Promise<NonNullable<typeof window.ymaps>> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Загрузка Яндекс Карт невозможна на сервере'));
  }

  // Если уже загружено — возвращаем существующее обещание
  if (ymapsPromise) return ymapsPromise;

  // Если API уже есть на странице
  if (window.ymaps && typeof window.ymaps.ready === 'function') {
    console.info('Яндекс Карт API уже инициализирован — переиспользуем.');
    ymapsPromise = new Promise((resolve) => window.ymaps!.ready(() => resolve(window.ymaps!)));
    return ymapsPromise;
  }

  // Проверка ключа
  if (!apiKey) {
    console.error('Не задан VITE_YMAPS_API_KEY. Укажите ключ в .env');
    return Promise.reject(new Error('Не указан API ключ'));
  }

  ymapsPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-ymaps="true"]');
    if (existing) {
      // Если скрипт уже добавлен, ждём готовности
      if (window.ymaps?.ready) {
        window.ymaps.ready(() => resolve(window.ymaps!));
      }
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${encodeURIComponent(apiKey)}&lang=${encodeURIComponent(lang)}`;
    script.async = true;
    script.defer = true;
    script.dataset.ymaps = 'true';

    script.onload = () => {
      if (window.ymaps?.ready) {
        window.ymaps.ready(() => {
          console.info('Яндекс Карт API загружен и готов к использованию.');
          resolve(window.ymaps!);
        });
      } else {
        console.error('Скрипт Яндекс Карт загружен, но ymaps недоступен.');
        reject(new Error('ymaps недоступен'));
      }
    };

    script.onerror = () => {
      console.error('Ошибка загрузки скрипта Яндекс Карт. Проверьте сеть и ключ.');
      reject(new Error('Ошибка загрузки скрипта Яндекс Карт'));
    };

    document.head.appendChild(script);
  });

  return ymapsPromise;
}


