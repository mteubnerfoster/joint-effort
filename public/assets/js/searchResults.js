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
    addMarker(user, "You");
}

function choiceClick() {
    console.log('choice click')
    deleteMarkers();
    let dataVals = $(this).data()
    const foodMarker = { lat: dataVals.foodlat, lng: dataVals.foodlong };
    const dispMarker = { lat: dataVals.displat, lng: dataVals.displong };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: foodMarker
    });
    addMarker(foodMarker, `${dataVals.foodname}`)
    addMarker(dispMarker, `${dataVals.dispname}`)

}


//map functions
function addMarker(position, title) {
    const marker = new google.maps.Marker({
        position,
        map,
        title
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

//button functions
$('.choiceBtn').click(choiceClick)

if ($('.choiceBtn').length == 0) {
    setTimeout(refreshPage, 1000)
}

//misc function
function refreshPage() {
    location.reload()
}
