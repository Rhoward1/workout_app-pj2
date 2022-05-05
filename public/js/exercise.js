// function to take in form input and generate workout data
const exerciseFormHandler = async () => {
    const bodyPart = document.getElementById("body-part-dropdown").value
    const equipment = document.getElementById("equipment-choice").value
   
    const response = await fetch ('/api/exercise/exercisedb/'+ bodyPart + "/" + equipment, {
        method: 'GET',
        headers: { 'Content-Type': "application/json"},
    });
    if (response.ok) {
        document.location.replace('/api/exercise/exercisedb/' + bodyPart + "/" + equipment);
    }else {
        alert(response.statusText);
    }
};

//button to render the workouts selected
document
.querySelector('.workoutButton')
.addEventListener('click', exerciseFormHandler );

