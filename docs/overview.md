## Специфичные для проекта вещи

Дев/Продакшн сборки и ссылки на используемые зависимости описаны в корневом readme
Изначально в проект заложена идея кроссплатформенности для сохранения части
кодовой базы при написания версий под React Native
поэтому логика старается держаться в папке components специфичные для платформы вещи 
(например браузерные api веб версии) желательно положены в папку api
и шаблоны (themes) приложения (для одной платформы может быть несколько шаблонов)
лежает в папке templates/{themeName}

**скорее всего версий под react Native не ожидается** поэтому при желании на структуру для
кроссплатформенности - можно внимания не обращать/упростить

вся постоянная но специфичная для сборки проекта информация для удобства
старается держаться в /configDefaults.json и мержится с переданным json string обьектом который может быть
передан при сборке через CLI

например перезаписываем значение build
````
npm run build -- --config={\"build\":$$DRONE_BUILD_NUMBER}
````

