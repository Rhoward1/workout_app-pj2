// const workoutBtn = document.querySelector(".workoutButton");




// workoutBtn.addEventListener("click", function () {
//     console.log("hello")
// // return getRandomWorkout()
// });


const exerciseFormHandler = async () => {
    console.log("hello")
    const bodyPart = document.getElementById("body-part-dropdown").value
console.log(bodyPart)
    const response = await fetch ('/api/exercise/exercisedb/'+ bodyPart, {
        method: 'GET',
        headers: { 'Content-Type': "application/json"},
    });
    // console.log(bodyPart)
    if (response.ok) {
        document.location.replace('/api/exercise/exercisedb/' + bodyPart);
    }else {
        alert(response.statusText);
    }
}

document
.querySelector('.workoutButton')
.addEventListener('click', exerciseFormHandler );

