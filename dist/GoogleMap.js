(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["async!https://maps.googleapis.com/maps/api/js?v=3&sensor=true"], function() {
    var GoogleMap;
    return GoogleMap = (function(_super) {
      __extends(GoogleMap, _super);

      function GoogleMap(el, options) {
        var defaultOptions, key, val;
        this.el = el;
        this.options = options != null ? options : {};
        this.addMarkerImage = __bind(this.addMarkerImage, this);
        this.addMarker = __bind(this.addMarker, this);
        this.panBy = __bind(this.panBy, this);
        this.addEvent = __bind(this.addEvent, this);
        defaultOptions = {
          center: new google.maps.LatLng(0, 0),
          zoom: 2,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        for (key in defaultOptions) {
          val = defaultOptions[key];
          if (!this.options[key]) {
            this.options[key] = val;
          }
        }
        GoogleMap.__super__.constructor.call(this, this.el, this.options);
      }

      GoogleMap.prototype.addEvent = function(evt, callback) {
        switch (evt) {
          case "loaded":
            return google.maps.event.addListenerOnce(this, 'tilesloaded', callback);
          default:
            return google.maps.event.addListener(this, evt, callback);
        }
      };

      GoogleMap.prototype.panBy = function(x, y) {
        if ((x == null) || (y == null)) {
          return console.warn('Both x and y coordinated need to be defined');
        }
        return GoogleMap.__super__.panBy.call(this, x, y);
      };

      GoogleMap.prototype.addMarker = function(position) {
        var marker;
        if (position == null) {
          position = this.options.center;
        }
        return marker = new google.maps.Marker({
          position: position,
          map: this
        });
      };

      GoogleMap.prototype.addMarkerImage = function(image, position) {
        var icon, marker;
        marker = this.addMarker(position);
        icon = {
          url: image.url
        };
        if (image.size != null) {
          icon.size = new google.maps.Size(image.size[0], image.size[1]);
        }
        if (image.origin != null) {
          icon.origin = new google.maps.Point(image.origin[0], image.origin[1]);
        }
        if (image.anchor != null) {
          icon.anchor = new google.maps.Point(image.anchor[0], image.anchor[1]);
        }
        marker.setIcon(icon);
        return marker;
      };

      return GoogleMap;

    })(google.maps.Map);
  });

}).call(this);
