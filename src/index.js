import './style.css';
import { intializeDropdowns } from './dropdown';
import { confirmPassword, validateConfirmPassword, validateEmail, validatePassword, validateZipcode } from './validate';

intializeDropdowns()
validateEmail()
selectCountry()
validateZipcode()
validatePassword()
validateConfirmPassword()
submitForm()

let country = null

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

        const confirmPasswordElement = document.querySelector('#confirm-password')
        if (confirmPasswordElement.value === "") {
            confirmPasswordElement.classList.add('invalid')
        }
    })
}