# MVP.js
## Документация
### `MVP.ajax(<options>)`
Данный метод выполняет асинхронный запрос с заданными параметрами.

Поля объекта `options`:
* `method: string` — http-метод: `"GET"` или `"POST"` (по умолчанию `"GET"`)
* `url: string` — адрес
* `data: any` — данные: `string` или `object`
* `bodyType: string` — в каком виде отправлять данные: `"json"`,`"params"` или `"raw"` (по умолчанию `"json"`)
* `success: function`

### `MVP.animate(<options>)`
Данный метод анимирует атрибуты элемента.

Поля объекта `options`:
* `element: object` — анимируемый DOM-элемент
* `attributes: object` — анимируемые атрибуты
* `easing: string` — интерполяция: `"ease"` или `"linear"` (по умолчанию `"linear"`)
* `duration: number` — длительность анимации