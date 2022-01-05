console.log('choose plant')
let lat, long;
let foodInfo = localStorage.getItem('chosenFoodStoreInfo');
foodInfo = JSON.parse(foodInfo)

let foodChoiceName = foodInfo.foodName
$('#foodChoiceName').text(foodChoiceName)

$('.plantBtn').click(plantBtnClick)

async function plantBtnClick() {
    let plant = $(this).data('value')

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