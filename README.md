# PokéAPI с использованием Astro

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge)](https://astro.build/)

![image](https://i.ibb.co/d4npMn1X/1920.png)

Фронтенд для данных из PokéAPI

## Основные фичи

- Адаптив под десктоп и мобильные;
- Можно добавить от 2 до 6 временных отрезков;
- При переключении временных отрезков изменяются числа и отображается соответствующий слайдер.

## Запуск проекта

1. Клонируйте проект

```bash
git clone git@github.com:AliceHab/astro-pokemons.git
```

2. Перейдите в директорию проекта

```bash
cd astro-pokemons
```

3. Установите зависимости (используя pnpm!)

```bash
pnpm install
```

4. Запустите проект

```bash
npm run dev
```

5. Проект автоматически запустится на http://localhost:4321

## Структура проекта

Проект разработан с использованием методологии FSD (Feature-Sliced Design).

```
src/
│
├── app/              // Layout и другие данные для работы проекта
│
├── entities/         // Логика работы с API и модели данных
│   └── pokemon/      // Запросы к PokéAPI и хранилище состояния
│
├── pages/            // Страницы проекта
│
├── shared/           // Общие UI компоненты и стили
│
├── widgets/          // Крупные блоки: страницы, Header
```

## Используемые технологии

- React
- TypeScript
- Astro
- linaria.dev

## Контакты

email: maksim.efremof@gmail.com
tg: https://t.me/areyoubaka
