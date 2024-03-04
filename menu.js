(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav-list');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-list--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-list--show');
    });

    


})();