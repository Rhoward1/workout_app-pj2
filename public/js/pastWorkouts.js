//function that takes the user input from form and displays it in a card
const newWorkoutForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const sets = document.querySelector('#sets').value.trim();
  const reps = document.querySelector('#reps').value.trim();
  const rating = document.querySelector('#rating').value.trim();

  if (name && sets && reps && rating) {
    const response = await fetch('/api/past-workout', {
      method: 'POST',
      body: JSON.stringify({
        name,
        sets,
        reps,
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