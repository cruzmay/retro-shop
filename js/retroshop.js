function toogleMenu() {
    // console.log('its working')
    let menu = document.getElementById('hiddenMenu')
    if (menu.style.left === "-400px") {
        menu.style.left = "0"
    }
    else {
        menu.style.left = "-400px"

    }
}
function openFilters() {
   
    let filters = document.getElementById('filters')
    let expand = document.getElementById('expand')

    if (filters.style.display === "none") {
        filters.style.display = "flex"
        expand.style.transform = "rotate(180deg)" 
    }
    else {
        filters.style.display = "none"
        expand.style.transform = "rotate(0deg)" 

    }
}
window.addEventListener('resize', () => {
    let ancho = window.outerWidth;
    // console.log(ancho)
    if(ancho >= 950) {
        filters.style.display = "flex"
    } else {
        filters.style.display = "none"
    }
});


function openModal() {
    let modal = document.getElementById('modal')
    let overlay = document.getElementById('overlay')
    if(overlay.style.display === "none") {
        overlay.style.display = 'flex'
        modal.style.animation = 'modalIn 1s forwards'
        
    }
    else {
        modal.style.animation = 'modalOut 2s forwards'
        overlay.style.display = 'none'
    }
}