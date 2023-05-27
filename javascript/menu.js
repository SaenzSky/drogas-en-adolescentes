console.log("hola")

const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector(".menu-navegacion");

hamburger.addEventListener('click', () => {
    /*el toggle añadir o quitar una clase dandole click al menu,
    menu almacena todo el menu de la nav */
    menu.classList.toggle('spread');
})

/*Es toda la ventana*/
window.addEventListener('click', e => {
    console.log('Im the window')
    /*si spread esta activa, y e.target el que va originar el click es diferente al menu de navegacion y cuando sea diferente al icono(hamburger) menu se añade un toggle se añada la misma clase, solo en esa condicion*/
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread');
    }
})