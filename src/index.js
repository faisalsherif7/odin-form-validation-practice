import './style.css';
import { intializeDropdowns } from './dropdown';

let country = null

intializeDropdowns()
validateEmail()
submitForm()
selectCountry()

function validateEmail() {
    const email = document.querySelector('#email')
    email.addEventListener("input", (event) => {
        const emailSpan = document.querySelector('.email-span')
        emailSpan.classList.remove('default-message')
        if (email.value === "") {
            emailSpan.classList.remove('error')
            emailSpan.classList.add('default-message')
            emailSpan.textContent = "Format a@b" 
            return
        }
        if (email.validity.valid) {
            emailSpan.classList.remove('error')
            emailSpan.textContent = "Valid Input✅"
        } else {
            emailSpan.classList.add('error')
            emailSpan.textContent = ""
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
    }
}

function submitForm() {
    document.querySelector('.submit').addEventListener('click', () => {
        validateCountry()
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
            span.textContent = "Required"
        })
    }) 
}