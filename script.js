require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/Layer"
      ], function (myMap, MapView, Layer) {
        var map = new myMap({
          basemap: "topo-vector"
        });

        var view = new MapView({
          map: map,
          container: "viewDiv",
          zoom: 12,
          center:[-104.991531,39.742043]
        });
  
        var layer = Layer.fromPortalItem({
          portalItem: {
            id: "1eadc859404445348536b4a0bdf32597"
          }
        })
          .then(addLayer)
          .catch(rejection);

        // Adds the layer to the map once it loads
        function addLayer(layer) {
          map.add(layer);
        }
        function rejection(error) {
          console.log("Layer failed to load: ", error);
        }
      });
