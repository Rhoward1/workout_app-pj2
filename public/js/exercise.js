
const exerciseFormHandler = async () => {
    console.log("hello")
    const bodyPart = document.getElementById("body-part-dropdown").value
    const equipment = document.getElementById("equipment-choice").value
console.log(bodyPart)
console.log(equipment)
    const response = await fetch ('/api/exercise/exercisedb/'+ bodyPart + "/" + equipment, {
        method: 'GET',
        headers: { 'Content-Type': "application/json"},
    });
    // console.log(bodyPart)
    if (response.ok) {
        document.location.replace('/api/exercise/exercisedb/' + bodyPart + "/" + equipment);
    }else {
        alert(response.statusText);
    }

}

document
.querySelector('.workoutButton')
.addEventListener('click', exerciseFormHandler );

