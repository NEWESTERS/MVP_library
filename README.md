# MVP.js
## Документация
### `MVP.ajax(<options: object>)`
Данный метод выполняет асинхронный запрос с заданными параметрами.

Поля объекта `options`:
* `method: string` — http-метод: `"GET"` или `"POST"` (по умолчанию `"GET"`)
* `url: string` — адрес
* `data: any` — данные: `string` или `object`
* `bodyType: string` — в каком виде отправлять данные: `"json"`,`"params"` или `"raw"` (по умолчанию `"json"`)
* `success: function`

Пример:
```javascript
MVP.ajax({
	method: "POST",
	bodyType: "json",
	url: "https://reqres.in/api/users",
	data: {
		name: 'John',
		job: 'Deveoper'
	},
	success: function(res) {
		console.log(res)
	}
})	
```

### `MVP.animate(<options: object>)`
Данный метод анимирует атрибуты элемента.

Поля объекта `options`:
* `element: object` — анимируемый DOM-элемент
* `attributes: object` — анимируемые атрибуты
* `easing: string` — интерполяция: `"ease"` или `"linear"` (по умолчанию `"linear"`)
* `duration: number` — длительность анимации

Пример:
```javascript
MVP.animate({
	element: document.getElementById('rect'),
	attributes: {
		transform: "scale(.5)",
		marginLeft: "200px"
	},
	easing: 'ease',
	duration: 1000
})
```