const form = document.getElementById('submit')
const name = document.getElementById('name')
const email = document.getElementById('email')
const age = document.getElementById('age')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    checkInputs()
})

function checkInputs() {
    const nameValue = username.value.trim()
    const emValue = email.value.trim()
    const ageValue = age.value.trim()

    // Check the username
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
    const group = input.parentElement
    const small = group.querySelector('small')
    small.innerText = msg
    // add the class error
    group.className = 'form error'
}

function setSuccessFor(input) {
    const group = input.parentElement
    group.className = 'form success'
}

// check the email isEmail