## Google Maps Module
define ["async!https://maps.googleapis.com/maps/api/js?v=3&sensor=true"],  () ->
	return class GoogleMap extends google.maps.Map
		constructor: (@el, @options = {}) ->
			defaultOptions = 
				center: new google.maps.LatLng 0, 0
				zoom: 2
				mapTypeId: google.maps.MapTypeId.ROADMAP

			# Merge options
			for key, val of defaultOptions
				@options[key] = val if !@options[key]

			super(@el, @options)

		addEvent: (evt, callback) =>
			switch evt
				when "loaded"
					google.maps.event.addListenerOnce this, 'tilesloaded', callback
				else
					google.maps.event.addListener this, evt, callback

		panBy: (x, y) =>
			##Gmaps throws "Maximum call stack size exceeded" if x or not not defined
			return console.warn('Both x and y coordinated need to be defined') if !x? or !y?
			super(x, y)

		addMarker: (position = @options.center) =>
			marker = new google.maps.Marker
				position: position
				map: this

		addMarkerImage: (image, position) =>
			marker = @addMarker position

			icon = url: image.url

			if image.size? 		then icon.size 	 = new google.maps.Size image.size[0], image.size[1]
			if image.origin? 	then icon.origin = new google.maps.Point image.origin[0], image.origin[1]
			if image.anchor? 	then icon.anchor = new google.maps.Point image.anchor[0], image.anchor[1]

			marker.setIcon icon
			return marker
