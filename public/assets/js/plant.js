function plantBtnClick() {
    let plantChoice = $(this).data('value')
    localStorage.setItem('plant', plantChoice);
}

$('.plantbtn').click(plantBtnClick)