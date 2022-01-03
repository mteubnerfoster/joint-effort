console.log("location.js")
let lat, long;

navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(lat)
    console.log(long)
})

function searchFood() {
    console.log("search btn clicked")
    let searchQuery = $('#searchTerm').val().trim();
    console.log(searchQuery)
}

$('#searchBtn').click(searchFood)
