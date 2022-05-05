// const res = require("express/lib/response");
const loginFormHandler = async (event) => {
    event.preventDefault();
  
   
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    // console.log(email,password)
    if (email && password) {
     
      const response = await fetch('/api/member/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response)
  
      if (response.ok) {
        // console.log("hello")
        document.location.replace('/api/exercise/exercisedb');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  

  