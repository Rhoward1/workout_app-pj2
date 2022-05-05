//function that takes the user input from form and displays it in a card
const newWorkoutForm = async (event) => {
  event.preventDefault();

  const length = document.querySelector('#length').value.trim();
  const rating = document.querySelector('#rating').value.trim();

  if (length && rating) {
    const response = await fetch('/api/past-workout', {
      method: 'POST',
      body: JSON.stringify({
        length,
        rating
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to log workout');
    }
  }
};

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newWorkoutForm)
