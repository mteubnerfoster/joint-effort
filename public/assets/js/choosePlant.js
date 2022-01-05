console.log('choose plant')

$('.plantBtn').click(plantBtnClick)

async function plantBtnClick() {
    let plant = $(this).data('value')
    let foodInfo = localStorage.getItem('chosenStoreInfo');
    foodInfo = JSON.parse(foodInfo)
    console.log(foodInfo)

    console.log(plant)
    console.log(foodInfo.foodLat)
    console.log(foodInfo.foodLong)
}