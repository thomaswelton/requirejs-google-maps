require ['GoogleMap', 'domReady!'], (GoogleMap) ->
	console.log 'GoogleMap main load'

	mapEl = document.getElementById 'map'
	map = new GoogleMap mapEl