console.log('food results')

let lat;
let long;

$('.yelpFood').click(foodtruckClick)

async function foodtruckClick() {
    lat = await $(this).data("lat");
    long = await $(this).data("long");

    // document.location.replace(`/food/search?lat=${lat}&long=${long}&term=${foodChoice}&category=cannabisdispensaries`);
}