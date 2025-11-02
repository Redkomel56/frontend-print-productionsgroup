/// <reference types="vite/client" />

// Расширение типов для Яндекс Карт API
declare global {
  interface Window {
    ymaps?: {
      ready: (callback: () => void) => void;
      [key: string]: any;
    };
  }
}

// Делаем файл модулем для правильной работы declare global
export {};
