const form = document.getElementById('submit')
const name = document.getElementById('name')
const email = document.getElementById('email')
const age = document.getElementById('age')

form.addEventListener('click', function (e) {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const nameValue = name.value.trim()

    if (nameValue === undefined || nameValue === null) {
        setError(name, "Le nom est vide")   
    } else {
        alert("Pass")
    }
}