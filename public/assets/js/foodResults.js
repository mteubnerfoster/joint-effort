console.log('food results')

let lat, long;


$('.yelpFood').click(foodtruckClick)

async function foodtruckClick() {
    lat = $(this).data(lat);
    long = $(this).data(long);
    console.log(lat)
    console.log(long)
}