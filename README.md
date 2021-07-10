# parcel-project-template

Один раз на проект установить все зависимости.

npm ci

```

Запустить режим разработки.

npm run dev
```

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Мастерская: деплой билда от Parcel на GitHub Pages Редактируем скрипт build и добавляем --public-url
/имя*репозитория/ Редактрируем в package.json поле "homepage":
"https://ваше*имя.github.io/имя_репозитория" Устанавливаем пакет npm install gh-pages Добавляем
npm-скрипты "deploy": "gh-pages -d dist" "predeploy": "npm run build"
