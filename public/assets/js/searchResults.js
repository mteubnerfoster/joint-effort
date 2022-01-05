console.log('food results')

let foodLat, dispLat;
let foodLong, dispLong;
let foodName, dispName;
let foodNameEl, dispNameEl;

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
    if (checkStorage()) {
        document.location.replace(`/final-results`);
    } else {
        document.location.replace(`/plant`);
    }

}

async function dispensaryClick() {
    dispNameEl = $(this).find('.dispName')
    dispLat = $(this).data("lat")
    dispLong = $(this).data("long")
    dispName = dispNameEl.text();

    let storeDispInfo = {
        dispLat,
        dispLong,
        dispName
    }
    localStorage.setItem('chosenDispStoreInfo', JSON.stringify(storeDispInfo));
    if (checkStorage()) {
        document.location.replace(`/final-results`);
    } else {
        document.location.replace(`/`);
    }
}

function checkStorage() {
    let foodInfo = localStorage.getItem('chosenFoodStoreInfo');
    foodInfo = JSON.parse(foodInfo)
    let dispInfo = localStorage.getItem('chosenDispStoreInfo');
    dispInfo = JSON.parse(dispInfo)
    if (foodInfo && dispInfo) {
        return true;
    } else {
        return false;
    }
}