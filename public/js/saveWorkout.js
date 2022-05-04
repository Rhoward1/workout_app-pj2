const startBtn = document.querySelector(".startWorkout")
const workoutNameEl = document.querySelector("workoutName")

startBtn.addEventListener("click", async function () {
    const workoutName= workoutNameEl.textContent
  const response= await fetch('/api/pastworkout/saveworkout', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(workoutName)
    },
    ),
   if (response.status === 200){
       console.log(response)
   }
})


