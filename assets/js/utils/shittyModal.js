const shittyModalConstructor = (imageSrc, title, descr) => {
    let elem = document.createElement('div');

    elem.className = 'modal-wrap apblur';
    elem.innerHTML = `
    <div class="smooth-pare-animate">
            <div class="image">
                <img src="` + imageSrc + `">
            </div>
            <div class="descr">
                <h1>` + title + ` <div class="modal-formcontact--event-close"></div></h1>
                <p class="p-descr">` + descr + `</p>
                <button onclick="followToMe(this, null)">Сотрудничать</button>
            </div>
        </div>
    `

    elem.querySelector('.modal-formcontact--event-close').addEventListener('click', () => {
        shittyModalAnimate(elem, false);
    });

    return elem;
}

const shittyModalAnimate = (modal, animateIn = true) => {

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

const shittyModal1 = () => {
    shittyModalAnimate(
        shittyModalConstructor(
            './assets/img/1aff16d45417778d871fa8d84e812416-removebg-preview.png',
            'web разработка',
            `Мы помогаем вашему бизнесу процветать в онлайн-мире, создавая не просто веб-сайт, а
            целое онлайн-присутствие. Наша команда профессиональных разработчиков использует передовые
            технологии для создания уникального продукта, который полностью соответствует вашим потребностям и
            требованиям. Свяжитесь с нами уже сегодня, чтобы достичь больших высот!`
        )
    );
}

const shittyModal2 = () => {
    shittyModalAnimate(
        shittyModalConstructor(
            './assets/img/e7cb5848e909092914cc6dbb714915e6-removebg-preview1.png',
            'seo продвижение',
            `Увеличение онлайн-присутствия и привлечение новых клиентов через поисковые системы - это эффективный способ развития вашего бизнеса. Наша команда SEO-экспертов поможет вам достичь высоких позиций в результатах поиска, увеличить трафик на ваш сайт и улучшить конверсию. Не упустите возможность увеличить доход вашего бизнеса.`
        )
    );
}
const shittyModal3 = () => {
    shittyModalAnimate(
        shittyModalConstructor(
            './assets/img/086959e33b9f021e3e0ecd13c3de797f-removebg-preview1.png',
            'web Аналитика',
            `Мы поможем вам максимально эффективно использовать ваш сайт для достижения ваших бизнес-целей. Наша команда экспертов в аналитике поможет вам разобраться в том, как пользователи взаимодействуют с вашим сайтом, выявить проблемные моменты и предложить решения для увеличения конверсии.`
        )
    );
}
const shittyModal4 = () => {
    shittyModalAnimate(
        shittyModalConstructor(
            './assets/img/d1d3c9879a5950a7109ce5e2cfc7a1ff-removebg-preview1.png',
            'ui/ux дизайн',
            `Эффективный и привлекательный дизайн - ключевой элемент успешного веб-сайта. Наша команда профессиональных UX/UI дизайнеров поможет вам создать уникальный дизайн, который легко использовать и будет привлекать и удерживать ваших пользователей. Мы оптимизируем навигацию и пользовательский опыт на вашем сайте для максимального удобства пользователей.`
        )
    );
}
const shittyModal5 = () => {
    shittyModalAnimate(
        shittyModalConstructor(
            './assets/img/60363ddc5ce8c50670e083c7184692ad-removebg-preview1.png',
            'Таргетированная реклама',
            `эффективный способ достичь вашу целевую аудиторию и увеличить продажи вашего бизнеса. Наша команда экспертов поможет вам создать точечно-направленные кампании, основанные на интересах и поведении вашей аудитории, чтобы максимизировать вашу конверсию. Мы используем передовые технологии для управления кампаниями и максимально эффективного использования вашего бюджета.`
        )
    );
}
