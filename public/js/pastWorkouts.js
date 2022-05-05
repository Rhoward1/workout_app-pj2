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

const deleteBtn = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');
console.log(id)
    const response = await fetch('/api/past-workout/'+ id, {
      method: 'DELETE',
    });
    console.log(response)

    if (response.ok) {
      document.location.replace('/past_workouts');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-workout-form')
  .addEventListener('submit', newWorkoutForm)

  document
  .querySelector('.past-list')
  .addEventListener('click', deleteBtn); 