console.log('choose plant')

$('.plantBtn').click(plantBtnClick)

async function plantBtnClick() {
    let plant = $(this).data('value')
    let lat, long;
    let foodInfo = localStorage.getItem('chosenStoreInfo');
    foodInfo = JSON.parse(foodInfo)
    lat = foodInfo.foodLat;
    long = foodInfo.foodLong
    console.log(foodInfo)

    console.log(plant)
    console.log(foodInfo.foodLat)
    console.log(foodInfo.foodLong)
    if (plant) {
        document.location.replace(`/search?lat=${lat}&long=${long}&term=${plant}&category=cannabisdispensaries&origin=plant`);
    }
}