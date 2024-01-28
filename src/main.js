let headerBtns = document.querySelector('.open-menu-mobile-btn');
let backdrop = document.querySelector('.backdrop');
let closebtn = document.querySelector('.modal-button-close');
let newPage = document.querySelectorAll('.list-item-link');

for (let link of newPage){
    link.onclick = function() {
        backdrop.classList.remove('active');
    }
}

headerBtns.onclick = function() {
    backdrop.classList.add('active');
}

closebtn.onclick = function() {
    backdrop.classList.remove('active');
}



