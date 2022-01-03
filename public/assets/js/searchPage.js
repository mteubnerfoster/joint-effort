console.log("location.js")
let lat, long;

navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    console.log(lat)
    console.log(long)
})

async function searchFood() {
    console.log("search btn clicked")
    let searchQuery = $('#searchTerm').val().trim();
    console.log(searchQuery)

    if (searchQuery) {
        // multiple params
        const response = await fetch(`/api/yelp`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log('response okay')
        } else {
            alert('failed to search');
        }
    }
}

$('#searchBtn').click(searchFood)
