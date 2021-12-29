const clickMouse = document.querySelector('.btnMobile');
const menuDesplegable = document.querySelector(".contListaNone");
let visible = false;

clickMouse.addEventListener("click", (e) => {
    if (visible == false) {
        menuDesplegable.classList.add("mostrar");
        visible = true;
    } else {
        menuDesplegable.classList = "none";
        visible = false;
    }
  });
// const menu = document.querySelector('.contListaNone')

menuDesplegable.addEventListener('click', (e) => {
    if (e.target === menuDesplegable && menuDesplegable.classList.contains("mostrar") || e.target.classList.contains(".anclaLista")) {
        menuDesplegable.classList.remove("mostrar");  
    } 
    menuDesplegable.classList.remove("mostrar");
})

// const clickMouse = document.querySelector(".btnMobile");
// let mostrar = false;

// clickMouse.addEventListener('click', function(e) {
//     if (mostrar == false) {
//         document.querySelector('.contListaNone').style.display = "block";
//         mostrar = true;
//     } else {
//         document.querySelector('.contListaNone').style.display = "none";
//     }
// })
    
// const clickMouse = document.querySelector('.btnMobile');
// const menuDesplegable = document.querySelector(".contListaNone");
// clickMouse.addEventListener("click", (e) => {
//     menuDesplegable.classList.add("mostrar");
//   });
// // const menu = document.querySelector('.contListaNone')

// menuDesplegable.addEventListener('click', (e) => {
//     if (e.target === menuDesplegable && menuDesplegable.classList.contains("mostrar") || e.target.classList.contains(".anclaLista")) {
//         menuDesplegable.classList.remove("mostrar");  
//     } 
//     menuDesplegable.classList.remove("mostrar");
// })



 