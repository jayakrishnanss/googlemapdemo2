export default function(map) {
    var directionsDisplay,
        directionsService = new google.maps.DirectionsService();
    $('#route').off().on("click", function() {
        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);
        var start = new google.maps.LatLng(8.4909, 76.9527);
        var end = new google.maps.LatLng(8.5484, 76.8789);
        var bounds = new google.maps.LatLngBounds();
        bounds.extend(start);
        bounds.extend(end);
        map.fitBounds(bounds);
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
            }
        });
    });
};
