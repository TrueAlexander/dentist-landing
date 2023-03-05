const header = () => {
    /*=============== SHOW SIDEBAR ===============*/
  const navMenu = document.getElementById('sidebar')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')

  /*===== SIDEBAR SHOW =====*/
  /* Validate If Constant Exists */
  if(navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add('show-sidebar')
    })
  }

  /*===== SIDEBAR HIDDEN =====*/
  /* Validate If Constant Exists */
  if(navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove('show-sidebar')
    })
  }
}

export default header