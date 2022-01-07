console.log("plant.js")


function plantBtnClick() {
    let plantChoice = $(this).data('value')
    localStorage.setItem('plant', plantChoice);
    console.log(plantChoice)
}

$('.plantbtn').click(plantBtnClick)