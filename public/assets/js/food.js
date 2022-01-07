console.log("foodjs")


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
    let lat, long, foodChoice;
    lat = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    foodChoice = localStorage.getItem('food');

    if (foodChoice) {
        document.location.replace(`/search?lat=${lat}&long=${long}&term=${foodChoice}&category=foodtrucks&origin=food`);
        localStorage.removeItem('food');
    } else {
        alert("Please select a food type")
    }
}

$('.foodbtn').click(btnClick)
$('.submitbtn').click(submitBtn)