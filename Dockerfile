# Используем Node.js 20 как базовый образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости с флагом --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Копируем исходный код
COPY . .

# Сборка production-версии (Vite создает папку dist)
RUN npm run build

# Устанавливаем serve для отдачи production-сборки
RUN npm install -g serve

# Открываем порт (Vite preview использует 4173)
EXPOSE 4173

# Запускаем production-сервер с правильной папкой dist
CMD ["serve", "-s", "dist", "-l", "4173"] 