const saveBtn = document.querySelector('.save-choice-btn')
const saveFormHandler = async (event) => {
    event.preventDefault();
    alert('Trying to see if it works!!!!')
    // const username = document.querySelector('#username-signup').value.trim();
    // const password = document.querySelector('#password-signup').value.trim();
    // const dateOfBirth = document.querySelector('#birthdate-signup').value.trim();
    // const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
    let {
      truck_name, 
      dispensary_name,
      image
    } = JSON.parse(localStorage.getItem('userSelection'))
    // if (username && password && dateOfBirth && isValidPassword) {
      const response = await fetch('/api/searchHistory', {
        method: 'POST',
        body: JSON.stringify({ truck_name, dispensary_name, image }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    // }
    // else{
    //   alert('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
    // }
  };

  saveBtn.addEventListener('click', saveFormHandler)