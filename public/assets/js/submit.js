console.log('submit js')

let resultCombo = []
let userLat = localStorage.getItem('lat');
let userLong = localStorage.getItem('long');
let foodChoice = localStorage.getItem('food');
let plantChoice = localStorage.getItem('plant');

async function submitBtn() {

    if (userLat && userLong) {
        if (foodChoice) {
            if (plantChoice) {
                let results = await getFoodTruckData()
                for (let i = 0; i < results.length; i++) {
                    const element = results[i];
                    let nearestDisp = await nearestDispensary(element.coordinates.latitude, element.coordinates.longitude, plantChoice, element)
                    resultCombo.push(nearestDisp)
                }
                handoverData(resultCombo)
            } else {
                alert('Please select a plant type.')
            }
        } else { alert('Please select a food type.') }
    } else { alert("An error occured, please enable location services") }



}

// wip
async function nearestDispensary(lat, long, plantChoice, foodTruck) {
    let url = `/api/yelp?lat=${lat}&long=${long}&term=${plantChoice}&category=cannabisdispensaries&limit=1`
    let placeholder;
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            foodTruck.nearestDisp = data[0]
            placeholder = data[0];
        });
    return foodTruck;
}

async function getFoodTruckData() {
    let foodTruckData = [];
    let url = `/api/yelp?lat=${userLat}&long=${userLong}&term=${foodChoice}&category=foodtrucks`
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            foodTruckData = data;
        })
    return foodTruckData;
}

async function handoverData(data) {
    console.log(data)
    await fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        document.location.replace(`/search`)
    )
}


$('.submitbtn').click(submitBtn)