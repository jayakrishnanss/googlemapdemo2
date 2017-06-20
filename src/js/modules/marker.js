import route from './route';
import heatMap from './heatMap';
import geoJSON from './geoJSON';
export default function(location) {
    var position = new google.maps.LatLng(location.latitude, location.longitude),
        map = new google.maps.Map(document.getElementById('map-canvas'), { zoom: location.zoom });
    map.setCenter(position);
    route(map);
    heatMap(map);
    geoJSON(map);
};
