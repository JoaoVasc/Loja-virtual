let navbar = document.querySelector('.nav-bar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searcForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searcForm = document.querySelector('.search-formato');

document.querySelector('#search-btn').onclick = () => {
    searcForm.classList.toggle('active');
    navbar.classList.remove('active');;
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-itens-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');navbar.classList.remove('active');
    searcForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searcForm.classList.remove('active');
    cartItem.classList.remove('active');
}
