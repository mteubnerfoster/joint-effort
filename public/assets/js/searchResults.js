console.log('search results js ')

let map;
let markers = [];


function initMap() {
    let userLat = localStorage.getItem('lat');
    let userLong = localStorage.getItem('long');
    const user = { lat: parseFloat(userLat), lng: parseFloat(userLong) };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: user,
    });
    addMarker(user);
}

function choiceClick() {
    console.log('choice click')
    deleteMarkers();
}

function addMarker(position) {
    const marker = new google.maps.Marker({
        position,
        map,
    });
    markers.push(marker);
}

function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

$('.choiceBtn').click(choiceClick)

if ($('.choiceBtn').length == 0) {
    setTimeout(refreshPage, 1000)
}

function refreshPage() {
    location.reload()
}
//https://developers.google.com/maps/documentation/javascript/examples/marker-remove

