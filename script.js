const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// SHOP PRODUCT SINGLE PAGE

var mainimg = document.getElementById('mainimg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}

smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}

smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
}

// SHOP PRODUCT SINGLE PAGE END
