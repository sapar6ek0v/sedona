const button = document.getElementById('search-button')
const menu = document.getElementById('search-header-burger')

button.addEventListener('click', () =>{
    menu.classList.toggle('search-menu-ul')
})

const links = document.querySelectorAll('.search-link')

links.forEach( (elem) =>{
        elem.addEventListener('click', () =>{
            menu.classList.remove('search-menu-ul')
        })
    }
)