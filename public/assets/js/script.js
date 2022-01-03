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


console.log('js file load')

$('#yes').on('click', function () {
  console.log('clicked yes')
})

$('#no').on('click', function () {
  console.log('clicked no')
})

document.getElementById("no").onclick = function () {
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

box.onclick = function () {
  document.getElementById("no").click()
}

document.getElementById("yes").onclick = function () {
  this.setAttribute('data-dismiss', 'modal')
}

modalBtn.click()

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

function showCarousel() {
  var plants = document.getElementById("plant");
  if (plants.style.display === "block") {
    plants.style.display = "none";
  } else {
    plants.style.display = "block";
  }
}

// $('.plantCard').click(function (){
//   console.log('clicked plant card');
//   plantTypes();
//   $(".plantCard").attr("disabled", true);
// });

// function plantTypes(){
//   let plantTitle = $('<h1>');
//   let indicaTitle = $('<h2>');
//   let indicaInfo = $('<div>');
//   let sativaTitle = $('<h2>');
//   let sativaInfo = $('<div>');
//   let hybridTitle = $('<h2>');
//   let hybridInfo = $('<div>');

//   plantTitle.attr('class', 'plantTitle');
//   indicaTitle.attr('class', 'indicaTitle');
//   indicaInfo.attr('class', 'indicaInfo');
//   sativaTitle.attr('class','sativaTitle');
//   sativaInfo.attr('class','sativaInfo');
//   hybridTitle.attr('class','hybridTitle');
//   hybridInfo.attr('class','hybridInfo');

//   plantTitle.text('Cannabis Plant Types');
//   indicaTitle.text('Indica');
//   indicaInfo.text('Indica cannabis strains usually come from short, bushy plants. Indica strains typically grow in slightly cooler climates than other types of cannabis. They’re often purchased by people who like to enjoy cannabis at night. If you want to put a movie on, read a book, or just go about your bedtime routine, you may be looking for an Indica that can serve as a nightcap. People often refer to the effects of Indicas as a “body high.”');
//   sativaTitle.text('Sativa');
//   sativaInfo.text('Physically speaking, Sativas typically grow on taller, thinner plants. These strains seem to grow most naturally in warm or tropical climates. Of course, any type of cannabis can be grown effectively just about anywhere now, thanks to indoor growing facilities. Sativa strains are a popular choice for the morning or the middle of the day, especially among people who plan on doing something active.');
//   hybridTitle.text('Hybrid');
//   hybridInfo.text("Some say Indicas are for eating snacks and getting comfortable, Sativas are for being active and alert, and Hybrids are somewhere in the middle. Truthfully, though, the most significant similarities between categories are physical. That is, Indicas normally grow like other Indicas, and Sativas grow like other Sativas. This is important for growers to know as they cultivate the healthiest cannabis possible, but it isn’t necessarily a predictor of the effects of cannabis. Some people ask about Indicas, Sativas, and Hybrids just because they hear those words get thrown around a lot. An experienced budtender will undoubtedly understand what you mean and be able to help you find an appealing strain. Still, though, it’s better to use terms that more accurately reflect what you want. If you want to feel calm and sleepy, say that. If you want to feel inspired and euphoric, say that. If you’re just sampling different strains to find a new favorite, that’s good to know too.");

//   plantTypeCard.append(plantTitle);
//   plantTypeCard.append(indicaTitle);
//   plantTypeCard.append(indicaInfo);
//   plantTypeCard.append(sativaTitle);
//   plantTypeCard.append(sativaInfo);
//   plantTypeCard.append(hybridTitle);
//   plantTypeCard.append(hybridInfo);
// };



// food section
function showFoodCategories() {
  var foods = document.getElementById("food");
  if (foods.style.display === "block") {
    foods.style.display = "none";
  } else {
    foods.style.display = "block";
  }
}

// $('.foodCard').click(function (){
//   console.log('clicked plant card');
//   foodTypes();
//   $(".foodCard").attr("disabled", true);
// });

// function foodTypes(){
//   for (let i = 0; i < foodCategories.length; i++) {
//     var foodButton = $('<button>');
//     foodButton.attr('class', 'foodBtn')
//     foodButton.text(foodCategories[i]);
//     foodTypeCard.append(foodButton)
    
//   }
// };

// navbar scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

// main logo zoom on scroll
// const zoomElement = document.querySelector(".zoom");
// let zoom = 1;
// const ZOOM_SPEED = 0.2;

// document.addEventListener("wheel", function(e) {  
    
//     if(e.deltaY > 0){    
//         zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
//     }else {    
//         zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }
      

// });