function validateEmail() {
    email.addEventListener("input", (event) => {
        const emailSpan = document.querySelector('.email-span')
        emailSpan.classList.remove('default-message')
        email.classList.remove('invalid')
        if (email.value === "") {
            emailSpan.classList.remove('error')
            emailSpan.classList.add('default-message')
            emailSpan.textContent = "Format a@b" 
            return
        }
        if (email.validity.valid) {
            emailSpan.classList.remove('error')
            emailSpan.textContent = "✅"
        } else {
            emailSpan.classList.add('error')
            emailSpan.textContent = "Please provide a valid email address"
        }
    })
}

function validateZipcode() {
    zipcode.addEventListener('input', () => {
        const zipcodeSpan = document.querySelector('.zipcode-span')
        zipcode.classList.remove('invalid')
        zipcodeSpan.classList.remove('error')
        if (zipcode.value === "") {
            zipcodeSpan.classList.add('default-message')
            zipcodeSpan.textContent = "Please provide a valid zipcode in the country you have selected"
            return
        }
        if (!zipcode.validity.valid) {
            zipcodeSpan.classList.add('error')
            zipcodeSpan.classList.remove('default-message')
            zipcodeSpan.textContent = "Please Provide a Valid Zipcode"
        } else {
            zipcodeSpan.classList.add('default-message')
            zipcodeSpan.textContent = "✅"
        }
    })
}

function validatePassword() {
    password.addEventListener('input', () => {
        const passwordSpan = document.querySelector('.password-span')
        password.classList.remove('invalid')
        passwordSpan.classList.remove('error')
        if (password.value === "") {
            passwordSpan.classList.add('default-message')
            passwordSpan.textContent = "Password must contain at least 10 characters, at least 1 number and 1 letter, and at least one special character"
            return
        }
        if (password.validity.valid) {
            passwordSpan.classList.add('default-message')
            passwordSpan.textContent = "✅"
        } else {
            passwordSpan.classList.add('error')
            passwordSpan.classList.remove('default-message')
            passwordSpan.textContent = "Password must contain at least 10 characters, at least 1 number and 1 letter, and at least one special character"
        }
        confirmPassword()
    })
}

function validateConfirmPassword() {
    const confirmPasswordElement = document.querySelector('#confirm-password')
    confirmPasswordElement.addEventListener('input', () => {
        confirmPassword()
    })
}

function confirmPassword() {
    const confirmPasswordSpan = document.querySelector('.confirm-password-span')
    const confirmPasswordElement = document.querySelector('#confirm-password')
    confirmPasswordElement.classList.remove('invalid')
    confirmPasswordSpan.classList.remove('error')
    console.log('here')
    if (confirmPasswordElement.value === "") {
        confirmPasswordSpan.textContent = ""
        return
    }
    if (confirmPasswordElement.value === password.value) {
        confirmPasswordSpan.textContent = "✅"
    } else {
        confirmPasswordElement.classList.add('invalid')
        confirmPasswordSpan.classList.add('error')
        confirmPasswordSpan.textContent = "Passwords do not match!"
    }
}

export { validateEmail, validatePassword, validateZipcode, validateConfirmPassword }