let modalAdd = [];
let modalField = null;

let elementCall__manicureApp = document.querySelector('.img-group');
let elementCall__lastProjects = document.querySelector('.img-solo');

let elementCall__burger = document.querySelectorAll('.burger__overlay');


modalAdd[2] = new ModalFormContact({
    data: null,
    "params": {
        "overlay-blur": true,
        "overlay-click-to-close": true,
        "overlay-hotkey-to-close": true
    }
});



const burgerToggleEvent = () => {
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


const mobileOverlayEventsStart = () => {
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



const shittyModalEventStart = () => {
    document.querySelectorAll('[data-link-modal]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            switch(el.getAttribute('data-link-modal') - 0) {
                case 1: return shittyModal1();
                case 2: return shittyModal2();
                case 3: return shittyModal3();
                case 4: return shittyModal4();
                case 5: return shittyModal5();
                case 11: return megaShitModal1(el);
                case 12: return megaShitModal2(el);
                case 13: return megaShitModal3(el);
                default: return;
            }
        })
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

    shittyModalEventStart();

    document.querySelector('.main__contact-to-us').addEventListener('click', (e) => {
        e.preventDefault();

        followToMe(e.target, null);
    });

});