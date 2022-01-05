console.log('food results')

let foodLat, dispLat;
let foodLong, dispLong;
let foodName, dispName;
let foodNameEl;

$('.yelpFood').click(foodtruckClick)
$('.yelpPlant').click(dispensaryClick)

async function foodtruckClick() {
    foodNameEl = await $(this).find('.foodName')
    foodLat = await $(this).data("lat");
    foodLong = await $(this).data("long");
    foodName = await foodNameEl.text();
    let storeFoodInfo = {
        foodLat,
        foodLong,
        foodName
    }
    localStorage.setItem('chosenFoodStoreInfo', JSON.stringify(storeFoodInfo));
    document.location.replace(`/plant`);
}

async function dispensaryClick() {
    console.log('dispensary click')
}