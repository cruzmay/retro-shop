const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
const producto = document.getElementById('producto')
const close = document.getElementById('close')
const add = document.getElementById('add')

producto.addEventListener('click', (event) => {
    console.log('tocame')
    overlay.classList.toggle('off')
    modal.classList.remove('modalout')
    modal.classList.add('modalin')
})

close.addEventListener('click', (event)=>{
    modal.classList.remove('modalin')
    modal.classList.add('modalout')
    overlay.classList.toggle('off')
    
    
})