import './style.css';
import { intializeDropdowns } from './dropdown';

let country = null

intializeDropdowns()
validateEmail()
selectCountry()
validateZipcode()
validatePassword()
submitForm()

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

function validateCountry() {
    if (country === null) {
        const dropdownButton = document.querySelector('.dropdown-button')
        dropdownButton.classList.add('invalid-country')
        const span = document.querySelector('.country-span')
        span.textContent = "select country bro"
        span.classList.add('error')
        span.classList.remove('default-message')
        return false
    }
    return true
}

function submitForm() {
    document.querySelector('.submit').addEventListener('click', () => {

        let tracker = 0

        const countryValidated = validateCountry()
        if (countryValidated === false) tracker = 1

        if (!email.validity.valid | email.value === "") {
            const emailSpan = document.querySelector('.email-span')
            emailSpan.classList.add('error')
            emailSpan.classList.remove('default-message')
            emailSpan.textContent = "Please provide a valid email address"
            email.classList.add('invalid')
            tracker = 1
        }

        if (!zipcode.validity.valid | zipcode.value === "") {
            const zipcodeSpan = document.querySelector('.zipcode-span')
            zipcodeSpan.classList.add('error')
            zipcodeSpan.classList.remove('default-message')
            zipcodeSpan.textContent = "Please Provide a Valid Zipcode"
            zipcode.classList.add('invalid')
            tracker = 1
        }

        if (!password.validity.valid | password.value === "") {
            const passwordSpan = document.querySelector('.password-span')
            passwordSpan.classList.add('error')
            passwordSpan.classList.remove('default-message')
            passwordSpan.textContent = "Password must contain at least 10 characters, at least 1 number and 1 letter, and at least one special character"
            password.classList.add('invalid')
            tracker = 1
        }
    })

}

function selectCountry() {
    document.querySelectorAll('.dropdown-item').forEach((dropdownItem) => {
        dropdownItem.addEventListener('click', (event) => {
            country = event.target.textContent
            document.querySelector('.dropdown-button').classList.remove('invalid-country')
            const span = document.querySelector('.country-span')
            span.classList.remove('error')
            span.classList.add('default-message')
            span.textContent = "✅"
        })
    }) 
}

function validateZipcode() {
    document.querySelector('#zipcode').addEventListener('input', () => {
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
    })
}