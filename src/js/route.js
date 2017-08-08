/**
 * Created by aravind on 7/8/17.
 */

function initMap() {
	var markerArray = [];
<<<<<<< HEAD
	var directionsService = new google.maps.DirectionsService;
	var map = new google.maps.Map(document.getElementById('map'),{
		scrollwheel:false,
		zoom:13,
		center:{lat:9.9467,lng:76.2880}
=======
	var directionsService = new google.maps.DirectionsService();
	var map = new google.maps.Map(document.getElementById("map"), {
		scrollwheel: false,
		zoom: 02,
		center: { lat: 9.9467, lng: 76.288 }
>>>>>>> valign
	});
	var directionsDisplay = new google.maps.DirectionsRenderer({ map: map });
	calculateAndDisplayRoute(
		directionsDisplay,
		directionsService,
		markerArray,
		map
	);
}
function calculateAndDisplayRoute(
	directionsDisplay,
	directionsService,
	markerArray,
	map
) {
	directionsService.route(
		{
			origin:
				"Cochin Port Trust Stadium,Bristow Rd Willingdon Island Kochi Kerala",
			destination: "Marine Drive Ground Ernakulam Kerala",
			travelMode: "DRIVING"
		},
		function(response, status) {
			// Route the directions and pass the response to a function to create
			// markers for each step.
			console.log(response);
			if (status === "OK") {
				directionsDisplay.setDirections(response);
			} else {
				console.log("error in google maps");
			}
		}
	);
}
