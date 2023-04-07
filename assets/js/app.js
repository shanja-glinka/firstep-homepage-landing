let modalAdd = [];
let modalField = null;

let elementCall__manicureApp = document.querySelector('.img-group');
let elementCall__lastProjects = document.querySelector('.img-solo');

let elementCall__burger = document.querySelectorAll('.burger__overlay');


let burgerToggleEvent = () => {
    elementCall__burger.forEach(burger => {
        burger.classList.toggle('active');
    });

    document.querySelector('.overlay-mobile-nav').classList.toggle('active');

    document.querySelector('.header__logo').classList.toggle('overlay-active');
    document.querySelector('.header__nav').classList.toggle('overlay-active');
    document.querySelector('.header__toogle').classList.toggle('overlay-active');
    document.querySelector('.header__burger').classList.toggle('overlay-active');
    document.querySelector('main').classList.toggle('overlay-active');
    document.querySelector('footer').classList.toggle('overlay-active');
}


let mobileOverlayEventsStart = () => {
    elementCall__burger.forEach(burger => {
        burger.addEventListener('click', () => {
            burgerToggleEvent();
        });
    });

    document.querySelectorAll('.overlay-mobile-nav nav a').forEach(link => {
        link.addEventListener('click', () => {
            burgerToggleEvent();
        });
    });

    document.querySelector('.overlay-mobile-nav button').addEventListener('click', () => {
        burgerToggleEvent();
    });
}



document.addEventListener('DOMContentLoaded', () => {

    makeFetchJson('assets/var/manicure.app.modal.json', (res) => {
        modalAdd[0] = new ModalAlbum(res);

        elementCall__manicureApp.addEventListener('click', () => {
            modalAdd[0].render(elementCall__manicureApp);
        });

    });


    makeFetchJson('assets/var/lastprojects.modal.json', (res) => {
        modalAdd[1] = new ModalField(res);

        elementCall__lastProjects.addEventListener('click', () => {
            modalAdd[1].render(elementCall__lastProjects);
        });
    });


    mobileOverlayEventsStart();

});