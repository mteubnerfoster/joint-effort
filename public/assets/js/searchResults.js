console.log('food results')

let foodLat;
let foodLong;
let foodName;

$('.yelpFood').click(foodtruckClick)

async function foodtruckClick() {
    foodLat = await $(this).data("lat");
    foodLong = await $(this).data("long");
    foodName = await $(this).data("alias");
    foodId = await $(this).data("id");
    let storeInfo = {
        foodLat,
        foodLong,
        foodName,
        foodId
    }
    localStorage.setItem('chosenStoreInfo', JSON.stringify(storeInfo));
    console.log($(this).find($('foodName')))
    document.location.replace(`/plant`);
}