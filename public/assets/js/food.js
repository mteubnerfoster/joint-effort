console.log("foodjs")


function foodBtnClick() {
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
    plantChoice = localStorage.getItem('plant');
    console.log(foodChoice)
    console.log(plantChoice)
    console.log(lat)
    console.log(long)

    if (foodChoice && plantChoice) {
        document.location.replace('/search');
    } else {
        alert("Please select a food type")
    }
}

$('.foodbtn').click(foodBtnClick)
$('.submitbtn').click(submitBtn)