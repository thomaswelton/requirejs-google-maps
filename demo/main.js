(function() {
  require(['GoogleMap', 'domReady!'], function(GoogleMap) {
    var map, mapEl;

    console.log('GoogleMap main load');
    mapEl = document.getElementById('map');
    return map = new GoogleMap(mapEl);
  });

}).call(this);
