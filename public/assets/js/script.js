let alertBox = document.querySelector('#alertBox')
let yes = document.querySelector('#yes')
let myModal = document.querySelector('#myModal')
let modalBtn = document.querySelector('#modalBtn')
let box = document.querySelector('#box')
let plantTypeCard = $('#plantTypeCard')
let foodTypeCard = $('#foodTypeCard')
let food = document.querySelector('#food')
let plant = document.getElementById('plant')
let foodCategories = ['Chicken', 'Chinese', 'Pizza', 'Burgers', 'Sushi', 'Mexican', 'Pasta', 'Randomizer']
let authAge = document.querySelector('#auth-age')
let authLocation = document.querySelector('#auth-location')
let cancel = document.querySelector('#cancel')
let submit = document.querySelector('submit')
let btnClose = document.querySelector('.btn-close')

// console.log(authAge.value, authLocation.value)

console.log('js file load')

$('#yes').on('click', function () {
  console.log('clicked yes')
})

$('#no').on('click', function () {
  console.log('clicked no')
})

document.getElementById("cancel").onclick = function () {
  var status = alertBox.getAttribute('data-status')
  if (status === 'close') {
    alertBox.classList.add('d-block')
    alertBox.classList.remove('d-none')
    alertBox.setAttribute('data-status', 'open')
  } else {
    alertBox.classList.add('d-none')
    alertBox.classList.remove('d-block')
    alertBox.setAttribute('data-status', 'close')
  }
}

document.getElementById("submit").onclick = function () {
  // add function that verfies check boxes when submitting
  console.log(authAge.value, authLocation.value)
  if(authAge.value === 'on' && authLocation.value === 'on') {
     this.setAttribute('data-dismiss', 'modal')
     authAge.value='off'
     authLocation.value='off'
  } else{
    if(authAge.value === 'off') {
      cancel.click()
    }
  }
}

$('.modal-check').on('click', function() {
  if($(this).val()==="off"){
    $(this).val('on')
  } else {
    $(this).val('off')
  }
})

btnClose.addEventListener('click', function() {
  cancel.click()
})

// modalBtn.click()
$("#myModal").modal({"backdrop": "static"});

$('#save').on('click', function (event) {
  event.preventDefault();

  var newTodo = {
    title: $('#title').val(),
    description: $('#description').val()
  }

  fetch('/api/save', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  }).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log('Data from backend we got back after we did a fetch!!', data)
  })
})

// plant section
function showPlantTabs() {
  var plants = document.getElementById("plant");
  if (plants.style.display === "block") {
    $('.plantHidden').fadeToggle('slow');
    plants.style.display = "none";

  } else {
    $('.plantHidden').fadeToggle('slow');
    plants.style.display = "block";

  }
}

// food section
function showFoodCategories() {
  var foods = document.getElementById("food");
  if (foods.style.display === "block") {
    $('.foodHidden').fadeOut('slow');
    foods.style.display = "none";
  } else {
    $('.foodHidden').fadeIn('slow');
    foods.style.display = "block";
  }
}

function foodTypes(){
  for (let i = 0; i < foodCategories.length; i++) {
    var foodButton = $('<button>');
    foodButton.attr('class', 'foodBtn')
    foodButton.text(foodCategories[i]);
    foodTypeCard.append(foodButton)
    
  }
};

// navbar scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// card animation
$(document).ready(function() {
  //window and animation items
  var animation_elements = $.find('.animationCard');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });
  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');
});


