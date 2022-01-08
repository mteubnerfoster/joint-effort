console.log("plant.js")

function plantBtnClick() {
    let plantChoice = $(this).data('value')
    localStorage.setItem('plant', plantChoice);
    navigator.geolocation.getCurrentPosition(function (position) {
        let storeLat = position.coords.latitude;
        let storeLong = position.coords.longitude;
        localStorage.setItem('lat', storeLat);
        localStorage.setItem('long', storeLong);
    })
}

$('.plantbtn').click(plantBtnClick)