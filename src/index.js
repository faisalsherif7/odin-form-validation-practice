import './style.css';
import { intializeDropdowns } from './dropdown';

let country = null

intializeDropdowns()
validateEmail()
selectCountry()
validateZipcode()
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
        zipcodeSpan.classList.remove('invalid')
        if (document.querySelector('#zipcode').value === "") {
            zipcodeSpan.classList.remove('error')
            zipcodeSpan.classList.add('default-message')
            zipcodeSpan.textContent = "Please provide a valid zipcode in the country you have selected"
            return
        }
        if (!zipcode.validity.valid) {
            zipcodeSpan.classList.add('error')
            zipcodeSpan.classList.remove('default-message')
            zipcodeSpan.textContent = "Please Provide a Valid Zipcode"
        } else {
            zipcodeSpan.classList.remove('error')
            zipcodeSpan.classList.add('default-message')
            zipcodeSpan.textContent = "✅"
        }
    })
}
