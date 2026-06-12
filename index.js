const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SPECIAL = '!@#$%^&*()_+-=?^_+~';

const upperCase = document.passwordGenerator.uppercase
const lowerCase = document.passwordGenerator.lowercase
const numbers = document.passwordGenerator.numbers
const special = document.passwordGenerator.special

const generate = document.getElementById("btn")
const value = document.getElementById("output")
const lengthSlider = document.getElementById("lengthSlider")
const lengthValue = document.getElementById("lengthValue")

lengthValue.textContent = '10'

function getSettings() {
    let pool = ''

    if (upperCase.checked) {
        pool += UPPERCASE
    }
    if (lowerCase.checked) {
        pool += LOWERCASE
    }
    if (numbers.checked) {
        pool += NUMBERS
    }
    if (special.checked) {
        pool += SPECIAL
    }

    return pool
}

function getLength() {
    return Number(lengthSlider.value)
}

function getPassword() {
    let password = ''

    let length = getLength()

    let pool = getSettings()

    for (let i = 0; i < length; i++) {
        password += pool[Math.floor(Math.random() * pool.length)]
    }

    value.textContent = password
}

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value
})

generate.addEventListener("click", getPassword);