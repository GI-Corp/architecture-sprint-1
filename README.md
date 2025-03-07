# Первое задание  
## Планирование перехода на микрофронтенды  

Мы разбили монолитное приложение на несколько независимых микрофронтендов, каждый из которых охватывает отдельную бизнес-область:  

- **Хост (Host)** — основное приложение (объединяет все микрофронтенды) 
- **Фотографии (Cards)** — добавление, удаление и просмотр изображений.  
- **Профиль пользователя (Profile)** — отображение и редактирование данных профиля и аватара.  
- **Идентификация (Identity)** — регистрация и авторизация пользователей.  

Основной принцип, на котором строится наша архитектура — **вертикальная нарезка**. Это означает, что каждый микрофронтенд является самостоятельной единицей, обладающей всем необходимым функционалом. Такой подход позволяет разрабатывать, тестировать и развёртывать их независимо друг от друга.  

Каждый модуль включает в себя все необходимые зависимости, что полностью изолирует их в рамках собственного пакета развертывания. Это не только предотвращает конфликты версий, но и значительно упрощает обновление или замену отдельных микрофронтендов. Более того, такая изоляция снижает риск того, что изменения в одном модуле могут повлиять на другие.  

### Слой композиции  

Мы используем **клиентскую композицию**, при которой модули собираются на стороне пользователя. После первоначальной загрузки страницы клиентская часть приложения берет на себя динамическую интеграцию, минимизируя количество запросов к серверу.  

### Маршрутизация  

Каждый микрофронтенд имеет свой маршрутизатор, а **центральный оркестратор** динамически загружает нужные модули в зависимости от навигации пользователя. Это делает систему гибкой, масштабируемой и независимой в обновлениях.  

---

## Реализация микрофронтендов  

На этом этапе мы интегрировали разрозненные компоненты в единый пользовательский интерфейс. Мы выбрали **run-time интеграцию**, что позволяет динамически загружать микрофронтенды во время выполнения.  

Подход **build-time** нам не подходит, так как микрофронтенды не являются жестко связанными между собой.  

Так как большинство наших компонентов являются функциональными (например, pop-up окна, действия внутри страницы) и не зависят друг от друга, **lazy-loading** идеально вписывается в архитектуру. Это позволяет загружать только те части интерфейса, которые действительно необходимы в данный момент, что ускоряет работу приложения.  

### Выбор технологии  

Основным инструментом для реализации микрофронтендов мы выбрали **Webpack Module Federation (WMF)**. Он поддерживает **ленивую загрузку (lazy-loading)**, что снижает время первоначальной загрузки страницы и оптимизирует использование ресурсов.  

В структуре приложения есть:  
- **Хост (host)** — основное приложение, которое динамически загружает удалённые модули (микрофронтенды).  
- **Удалённые модули** — независимые микрофронтенды, которые могут разделять зависимости, избегая конфликтов версий.  

Мы не стали использовать **Single SPA**, так как нам критично важно динамическое управление зависимостями во время выполнения и возможность использования разных версий библиотек без конфликтов. Кроме того, все наши микрофронтенды построены на **React**, что делает WMF более естественным решением.  

### Управление состоянием  

Одной из ключевых задач было обеспечение единого состояния пользователя между микрофронтендами. В нашем случае это касается, например, **состояния аутентификации**. Оно должно быть доступно в каталоге фотографий, профиле пользователя и на главной странице без задержек.  

Для этого мы используем **Redux**. Он позволяет микрофронтендам получать доступ к общему состоянию и изменять его при необходимости. Такой подход гарантирует синхронизацию всех частей приложения и стабильное взаимодействие с пользователем.  


# Второе задание

Ссылка на схему draw.io:
https://drive.google.com/file/d/1BeIaDBPPpBE-Hkvem63FOes8fJ7RYwD9/view?usp=drive_link
