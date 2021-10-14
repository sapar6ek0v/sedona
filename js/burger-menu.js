const button = document.getElementById('header-button')
const menu = document.getElementById('ul-header-menu')

button.addEventListener('click', () =>{
    menu.classList.toggle('header-menu-ul')
})

const links = document.querySelectorAll('.header-link')

links.forEach( (elem) =>{
        elem.addEventListener('click', () =>{
            menu.classList.remove('header-menu-ul')
        })
    }
)