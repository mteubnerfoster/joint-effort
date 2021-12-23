let alertBox = document.querySelector('#alertBox')
let yes = document.querySelector('#yes')
let myModal = document.querySelector('#myModal')
let modalBtn = document.querySelector('#modalBtn')
let box = document.querySelector('#box')

console.log('js file load')

$('#yes').on('click', function() {
    console.log('clicked yes')
 })

$('#no').on('click', function() {
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

$('#save').on('click', function(event) {
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
  }).then(function(response) {
    return response.json()
  }).then(function(data) {
      console.log('Data from backend we got back after we did a fetch!!', data)
  })
})