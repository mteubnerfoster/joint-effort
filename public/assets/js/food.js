function foodBtnClick() {
    foodChoice = $(this).data('value')
    localStorage.setItem('food', foodChoice);
}

$('.foodbtn').click(foodBtnClick)