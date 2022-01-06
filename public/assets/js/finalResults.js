console.log('final results js')
// display google maps with two locations

{/* <script
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDn7niUq1uRwf01rUB5fhwornrQLFt58iU"
    async></script> */}

let map;

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
// delete local storage


localStorage.removeItem('chosenFoodStoreInfo');
localStorage.removeItem('chosenDispStoreInfo');