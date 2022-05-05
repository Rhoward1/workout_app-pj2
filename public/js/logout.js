// const res = require("express/lib/response");
const logout = async () => {
    const response = await fetch('/api/member/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/landing');
    } else {
     res.redirect('/api/member/login')
    }
  };
  
  document.querySelector('#logout-btn').addEventListener('click', logout);
  

  