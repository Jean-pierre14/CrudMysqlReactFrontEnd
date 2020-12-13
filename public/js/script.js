const form = document.getElementById('submit')
const username = document.getElementById('username')
const email = document.getElementById('email')
const pass = document.getElementById('pass')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    checkInputs()
})

function checkInputs() {
    const userValue = username.value.trim()
    const emValue = email.value.trim()
    const psValue = pass.value.trim()

    // Check the username
    if (userValue === '') {
        // Display error
        // Add our error class
        setErrorFor(username, 'Username is blank')
    } else {
        setSuccessFor(username)
    }
    if (emValue === '' || emValue === undefined) {
        setErrorFor(email, "Email is blank")
    } else {
        setSuccessFor(email)
    }

    if (psValue === '') {
        setErrorFor(input, "Password is required")
    } else {
        setSuccessFor(input)
    }
}

function setErrorFor(input, msg) {
    const group = input.parentElement
    const small = group.querySelector('small')
    small.innerText = msg
    // add the class error
    group.className = 'group error'
}

function setSuccessFor(input) {
    const group = input.parentElement
    group.className = 'group success'
}

// check the email isEmail