let long, lat;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

async function success(pos) {
    var crd = await pos.coords;
    long = crd.longitude;
    lat = crd.latitude;
    console.log(`${crd.latitude}, ${crd.longitude}`)
    getFoodTrucks();
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

function getFoodTrucks() {
    //https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js
}

