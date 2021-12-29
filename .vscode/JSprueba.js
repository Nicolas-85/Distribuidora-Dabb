const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", (e) => {
  mainNav.classList.add("shown");
});

mainNav.addEventListener("click", (e) => {
  if ((e.target === mainNav && mainNav.classList.contains("shown")) || e.target.classList.contains("main-menu__link")) {
    mainNav.classList.remove("shown");
  }
});
    /*
      Este elemento comentado hace referencia al LI,
      que podría ser clickeado cuando se hace hover y aparece el borde del LI
      Es un elemento que no debería disparar ningún evento si se clickeara, por eso lo dejo comentado 
    */
    //e.target.classList.contains("main-menu__item") ||
    
   
    
  

