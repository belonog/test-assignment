#Test assignment

Тестовое задание расчитано на 5-6часов:
* Основное - 4-5часа
* Дополнительное 1час

Основное задание обязательное к выполнению, дополнительное по желанию

##ОСНОВНОЕ ЗАДАНИЕ
Необходимо сверстать макет.
Требования :
1. Адаптивность
	1.1 при расширении больше 780 пикселей вид такой как на макете
	1.2 при расширении меньше 780 пикселей
    * фильтр пропадает [![](//joxi.ru/4Akz3nwiGN8G2q.jpg)](//joxi.ru/4Akz3nwiGN8G2q)
    * блок  - [![](//joxi.ru/nAyYzG3h5ydeAZ.jpg)](//joxi.ru/nAyYzG3h5ydeAZ) растягиваетьсяна всю ширину, по мере уменьшения расширения будет уменьшеаться текст ,
    * списки будут переходить на другие строки [![](//joxi.ru/vAWlD91cDjzBrW.jpg)](//joxi.ru/vAWlD91cDjzBrW) и [![](//joxi.ru/1A5ZbBeCW0NVrE.jpg)](//joxi.ru/1A5ZbBeCW0NVrE)
2. Стилизацию селектов [![](//joxi.ru/Q2Ken9dIRboVrj.jpg)](//joxi.ru/Q2Ken9dIRboVrj) делать не надо, просто подключить для них chosen select или аналог
3. Блок ![](//joxi.ru/eAOeq9aIbwMpmo.jpg)](//joxi.ru/eAOeq9aIbwMpmo) должен генерироваться на основе json

```json
{
 "posts": [
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "slils": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "slils": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   }
 ]
}
```

##ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ(необязательное, но будет плюсом)
1. Необходимо послать запрос на https://www.pinterest.com/{username}/feed.rss/ Параметр  username - должен вбиваться в инпуте(`<input type="text" />`) на странице и при сабмите формиы уходить запрос на https://www.pinterest.com/{username}/feed.rss/
*Пример* - я вбил слово julia и нажал сабмит запрос должен уйти на https://www.pinterest.com/julia/feed.rss/
2. Необходимо обработать ответ, если ответ пустой(пример  https://www.pinterest.com/julia6475675676574/feed.rss/) то просто написать - нет данных, если ответ `xml` то необходимо его распарсить и под формой вывести полученную информацию в виде списка

Пример структуры элемента списка
```html
<li>
	title
	link
	description
</li>
```
Стилизация на свое усмотрения, можно без.
