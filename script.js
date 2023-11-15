const div = document.querySelector('.menu');
const open = document.querySelector('.open-menu');
const close = document.querySelector('.close-menu');

open.addEventListener('click', () =>{
    div.classList.add('visible')
})

close.addEventListener('click', () => {
    div.classList.remove('visible')
})