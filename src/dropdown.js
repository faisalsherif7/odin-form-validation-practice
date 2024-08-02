function Dropdown(dropdownMenu) {
    collapseDropdown(dropdownMenu)
    const dropdownButton = dropdownMenu.querySelector('.dropdown-button')
    const dropdownItems = dropdownMenu.querySelector('.dropdown-items')

    dropdownButton.addEventListener('click', (event) => {
        if (dropdownButton.classList.contains('invisible')) {
            dropdownButton.classList.remove('invisible')
            dropdownItems.style.display = 'block'
        } else {
            dropdownButton.classList.add('invisible')
            dropdownItems.style.display = 'none'
        }
    })
}

function selectDropdown(dropdownMenu, selectedValue) {
    collapseDropdown(dropdownMenu)
    const dropdownButton = dropdownMenu.querySelector('.dropdown-button')
    dropdownButton.innerHTML = `
    <p>${selectedValue}</p>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z"/></svg>
    `
}

function collapseDropdown(dropdownMenu) {
    const dropdownButton = dropdownMenu.querySelector('.dropdown-button')
    const dropdownItems = dropdownMenu.querySelector('.dropdown-items')

    dropdownItems.style.display = 'none'
    dropdownButton.classList.add('invisible')
}

function intializeDropdowns() {
    const dropdownMenus = document.querySelectorAll('.dropdown-menu')
    dropdownMenus.forEach((dropdownMenu) => {
        Dropdown(dropdownMenu)
    })
    document.addEventListener('click', (event) => {
        if (event.target.className === 'dropdown-item') {
            selectDropdown(
                event.target.parentElement.parentElement,
                event.target.textContent
            )
        } 
    })
}

export { intializeDropdowns }
