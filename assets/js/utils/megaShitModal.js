const megaShitConstructor = (imageSrc, title, descr) => {
    
    return null;
}

const megaShitAnimate = (modal, animateIn = true) => {

    return;

    if (animateIn) {
        document.querySelector('body').appendChild(modal);
        setTimeout(() => {
            modal.querySelector('.smooth-pare-animate').style.opacity = 1;
        }, 100)
    } else {

        modal.querySelector('.smooth-pare-animate').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('body').removeChild(document.querySelector('.modal-wrap'));
        }, 400)
    }
}

const megaShitModal1 = (el) => {
    megaShitAnimate(
        megaShitConstructor(
            `<span>Польза</span>
            <span>Эффективность</span>
            <span>Важность</span>
            <span>Пригодность</span>
            <span>Практичность</span>
            <span>Выгода</span>
            <span>Применимость</span>
            <span>Функциональность</span>
            <span>Надежность</span>
            <span>Рациональность</span>
            <span>Удобство</span>
            <span>Качество</span>
            <span>Оптимизация</span>
            <span>Результативность</span>
            <span>Смысл</span>
            <span>Ценность</span>
            <span>Расходы</span>
            <span>Экономия</span>
            <span>Инвестиция</span>
            <span>Разумность</span>`
        )
    );
}

const megaShitModal2 = (el) => {
    megaShitAnimate(
        megaShitConstructor(
            './assets/img/e7cb5848e909092914cc6dbb714915e6-removebg-preview1.png',
            'seo продвижение',
            `Увеличение онлайн-присутствия и привлечение новых клиентов через поисковые системы - это эффективный способ развития вашего бизнеса. Наша команда SEO-экспертов поможет вам достичь высоких позиций в результатах поиска, увеличить трафик на ваш сайт и улучшить конверсию. Не упустите возможность увеличить доход вашего бизнеса.`
        )
    );
}
const megaShitModal3 = (el) => {
    megaShitAnimate(
        megaShitConstructor(
            './assets/img/086959e33b9f021e3e0ecd13c3de797f-removebg-preview1.png',
            'web Аналитика',
            `Мы поможем вам максимально эффективно использовать ваш сайт для достижения ваших бизнес-целей. Наша команда экспертов в аналитике поможет вам разобраться в том, как пользователи взаимодействуют с вашим сайтом, выявить проблемные моменты и предложить решения для увеличения конверсии.`
        )
    );
}