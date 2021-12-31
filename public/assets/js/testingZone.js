console.log("testing.js")
let lat, long;


navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(lat)
    console.log(long)

})

