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