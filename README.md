### MethEd School Интенсив - Интерактивный сервис поздравлений на REACT (30.08 — 02.09) ###

#### Напишем интерактивный сервис, который будет рандомно предлагать поздравления, в котором будут разные группы поздравлений и на итоговый вариант можно будет поделиться ссылкой.
####


ЧТО БУДЕМ ДЕЛАТЬ:

- Познакомимся с React, узнаем для чего он нужен
- Используем Create React App чтобы развернуть приложение
- Напишем интерактивный сервис поздравлений используя React
- Научимся работать с функциональными компонентами и props
- Узнаем что такое JSX, напишем верстку HTML на JSX
- Добавим состояние (state) в наш проект и Context для борьбы с Prop Drilling
- Научимся добавлять события в React
- Напишем сервис для работы с API
- Выгрузим проект на хостинг

#### Day1 ####
**Развернем React-проект и по макету сверстаем сайт**

макет Figma\
Node.js 16+\
create react App\
fonts.zip\
normalize.css

```
npx create-react-app .
```

#### Day2 ####
Интерактив, выпадающее меню\
Работа с состоянием, контекстом и хуки

#### Day3 ####
Работа с API
```
https://vanilla-legend-factory.glitch.me/api/
GET /api - получить список праздников
GET /api/text/{title_holiday} - получить случайный текст к празднику
GET /api/image/{title_holiday} - получить случайное изображение к празднику
GET /api/text/{id} - получить поздравление по его ID
GET /api/image/{id} - получить поздравление по его ID
GET /api/{id} - получить поздравление по его ID
```

hygen\
*npm i hygen -D*

#### Day4 ####
Замена контекст-провайдеров на хранилище состояния **redux**\
Redux-toolkit\
Redux / собираем context в state\
Смена текста поздравления\
Смена фона поздравления\

```
npm install @reduxjs/toolkit
npm i react-redux
```

#### Day5 ####
Функционал "Поделиться открыткой"\
Завершаем проект и деплоим\
[react-router v6](https://reactrouter.com/)
```
npm i react-router-dom@6
```
Сервис [vercel.com](vercel.com) для деплоя реакт-проекта с Гитхаба

TODO - прикрутить генерацию картинки из открытки с текстом.




