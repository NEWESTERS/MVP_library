const MVP = {
	ajax: function(params) {
		let xhr = new XMLHttpRequest()

		xhr.open(params.method ? params.method : 'GET', params.url, true)

		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return

			if ((xhr.status+'')[0] != '2') {
				console.log(`Error ${xhr.status}: ${xhr.statusText}`)
			} else {
				params.success(xhr.responseText)
			}
		}

		if (!params.method || params.method.toUpperCase() == 'GET') {
			xhr.send()
		} else if (params.method.toUpperCase() == 'POST') {
			if (!params.bodyType || params.bodyType.toLowerCase() == 'json') {
				xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
				xhr.send(JSON.stringify(params.data))
			} else if (params.bodyType.toLowerCase() == 'params') {
				let body = ''
				Object.keys(params.data).map( key => {
					body += `${key}=${params.data[key]}&`
				})
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
				xhr.send(body)
			} else if (params.bodyType.toLowerCase() == 'raw') {
				xhr.send(params.data)
			}
		}
	},

	animate: function(params) {
		params.element.style.transition = `all ${params.duration}ms ${params.easing ? params.easing : 'linear'}`

		setTimeout( _ => {
			Object.keys(params.attributes).map( key => {
				params.element.style[key] = params.attributes[key]
			})
		}, 1)

		setTimeout( _ => {
			params.element.style.transition = ''
		}, params.duration + 1)
	}
}






