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
    const emValue = email.value.trim()
    const ageValue = age.value.trim()
    if (nameValue === '') {
        setErrorFor(name, 'Nom est vide')
    } else {
        setSuccessFor(name)
    }
    if (emValue === '' || emValue === undefined) {
        setErrorFor(email, "Votre email")
    } else {
        setSuccessFor(email)
    }
    if (ageValue === '') {
        setErrorFor(input, "Age est invalid")
    } else {
        setSuccessFor(input)
    }
}

function setErrorFor(input, msg) {
    const form = input.parentElement
    const small = form.querySelector('small')
    small.innerText = msg
    // add the class error
    form.className = 'form error'
}

function setSuccessFor(input) {
    const form = form.parentElement
    form.className = 'form success'
}

// check the email isEmail