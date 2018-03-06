function initMap() {
	var myLocation = new google.maps.LatLng(9, 76);
	var mapOptions = {
		center: myLocation,
		zoom: 19
	};
	var marker = new google.maps.Marker({
		position: myLocation,
		title: "Property Location"
	});
	var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
	marker.setMap(map);
}
