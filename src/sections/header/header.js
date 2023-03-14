const header = () => {
    /*=============== SHOW SIDEBAR ===============*/
  const navMenu = document.getElementById('header')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')

  /*===== SIDEBAR SHOW =====*/
  /* Validate If Constant Exists */
  // if(navToggle) {
  //   navToggle.addEventListener("click", () => {
  //     navMenu.classList.add('show-sidebar')
  //   })
  // }

  /*===== SIDEBAR HIDDEN =====*/
  /* Validate If Constant Exists */
  // if(navClose) {
  //   navClose.addEventListener("click", () => {
  //     navMenu.classList.remove('show-sidebar')
  //   })
  // }

    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  //get all sections with an id
  const sections = document.querySelectorAll("section[id]")

  //add an eventlistener listening for scroll
  window.addEventListener("scroll", navHighlighter)

  function navHighlighter () {
    console.dir(navMenu)
    navMenu.style.backgroundColor = "rgba(255, 255, 255, 1)"
    //get current scroll position
    let scrollY = window.scrollY
    //loop through the sections to get height, top and Id values
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute("id")
      //if our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link on sidebar, else remove it
      //to know which link needs an active class we use sectionId
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
      }
    })
  }
  /*=============== SHOW SCROLL UP ===============*/
  // const navItems = document.querySelectorAll(".nav__item")

  // navItems.forEach(item => {
  //   item.addEventListener('click', () => {
  //     navMenu.classList.remove('show-sidebar')
  //   })
  // })
}

export default header