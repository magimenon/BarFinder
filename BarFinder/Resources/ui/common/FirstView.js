//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 5;
gpsProvider = Ti.Geolocation.Android.createLocationProvider({
    name: Ti.Geolocation.PROVIDER_GPS,
    minUpdateTime: 60, 
    minUpdateDistance: 100
});
Ti.Geolocation.Android.addLocationProvider(gpsProvider);
	
	var self = Titanium.Map.createView({
        mapType: Titanium.Map.STANDARD_TYPE,
        animate:true,
        regionFit:true,
        userLocation:true
    });
    
    Titanium.Geolocation.getCurrentPosition(function(e) {
    if (e.error)
    {
        alert('Cannot get your current location');
        return;
    }

    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;

    var current = {
            latitude : latitude,
            longitude : longitude,
            latitudeDelta : .05,
            longitudeDelta : .05
        };
    mapview.setLocation(current);
    mapview.userLocation = true;
});
	return self;
}

module.exports = FirstView;
