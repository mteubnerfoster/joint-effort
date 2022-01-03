console.log("foodjs")

let lat, long, foodVal;

function btnClick() {
    foodVal = $(this).data('value')
    localStorage.setItem('food', foodVal);

    navigator.geolocation.getCurrentPosition(function (position) {
        let storeLat = position.coords.latitude;
        let storeLong = position.coords.longitude;
        localStorage.setItem('lat', storeLat);
        localStorage.setItem('long', storeLong);
    })

}

function submitBtn() {

    lat = localStorage.getItem('lat');
    long = localStorage.getItem('long');
    foodVal = localStorage.getItem('food');
    console.log(lat)
    console.log(long)
    console.log(foodVal)
}

$('.foodbtn').click(btnClick)
$('#foodSubmitBtn').click(submitBtn)