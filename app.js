let serach = document.querySelector(".search-box");

document.querySelector('#search-icon').onclick = () => {
    serach.classList.toggle("display-none")
}

document.addEventListener("scroll", () => {
    const header = document.querySelector("header")

    if(window.scrollY > 0){
        header.classList.add('scrolled')
      }else{
          header.classList.remove('scrolled')
      }
})

//========================//Navbar-Design!//==========================//

const toggleButton = document.getElementById('nav-toggle')
const navLinks = document.getElementById('nav-links')

toggleButton.addEventListener('click', () => {
navLinks.classList.toggle('active')
})

// Loader-Function

var loader = document.querySelector(".loader")

window.addEventListener("load" , vanish)

function vanish(){
    loader.classList.add("loader-hidden")
}