# ABA webinar funnel landing

Адаптивный лендинг на React Next для регистрации на вебинар.

## Запуск локально

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Деплой на Vercel

1. Загрузите проект в GitHub.
2. Подключите репозиторий в Vercel.
3. Framework Preset: Next.js.
4. Build command: `npm run build`.
5. Output directory оставьте пустым.

## Где менять форму GetCourse

Файл: `app/components/GetCourseWidget.jsx`.

Замените значения:

```js
const SCRIPT_ID = "05056b670cb2329a740b429c10c24237443072ca";
const WIDGET_ID = "1618186";
```

На ID, которые выдаст GetCourse для конкретной формы вебинара.

## Где менять изображения

Все изображения-заглушки лежат в `public/images/`. В коде они подключены только через тег `<img>`.
