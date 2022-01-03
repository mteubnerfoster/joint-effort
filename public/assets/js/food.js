console.log("foodjs")

let lat, long, foodChoice;

function btnClick() {
    foodChoice = $(this).data('value')
    localStorage.setItem('food', foodChoice);

    navigator.geolocation.getCurrentPosition(function (position) {
        let storeLat = position.coords.latitude;
        let storeLong = position.coords.longitude;
        localStorage.setItem('lat', storeLat);
        localStorage.setItem('long', storeLong);
    })
}

async function submitBtn() {

    lat = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    foodChoice = localStorage.getItem('food');

    if (foodChoice) {
        const response = await fetch(`/api/yelp?lat=${lat}&long=${long}&food=${foodChoice}`, {
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

$('.foodbtn').click(btnClick)
$('#foodSubmitBtn').click(submitBtn)