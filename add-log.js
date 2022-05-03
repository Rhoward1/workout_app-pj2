async function newForm(event) {
    event.preventDefault();
  
    const dish_name = document.querySelector('#length').value;
    const description = document.querySelector('#rating').value;
  
    const response = await fetch(`/api/logged-workout`, {
      method: 'POST',
      body: JSON.stringify({
        length,
        rating,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add log');
    }
  }
  
  document
    .querySelector('.new-dish-form')
    .addEventListener('submit', newFormHandler);
  