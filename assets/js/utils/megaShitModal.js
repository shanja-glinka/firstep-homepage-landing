

const megaShitConstructor = (list) => {
    let elem = document.createElement('div');

    elem.className = 'modal-wrap apblur';
    elem.innerHTML = `
    <div class="smooth-pare-animate">
        <canvas id="wordlist2"></canvas>
    </div>
    `

    elem.querySelector('.smooth-pare-animate').addEventListener('click', () => {
        megaShitAnimate(elem, false);
    });


    // gridSize: 
    document.querySelector('body').appendChild(elem);

    let canvas = elem.querySelector('#wordlist2');
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;

    canvas.setAttribute('width', w);
    canvas.setAttribute('heigth', h);

    WordCloud(canvas, {
        list: list,
        fontFamily: 'Times, serif',
        color: '#000',
        backgroundColor: 'transparent',
        
        
        shrinkToFit: true,
        drawOutOfBound: false,

        shuffle: true,
        rotateRatio: 0.5,
        rotationSteps: 90
    });


    setTimeout(() => {
        elem.querySelector('.smooth-pare-animate').style.opacity = 1;
    }, 100);

    return elem;
}

const megaShitAnimate = (modal, animateIn = true) => {
    if (!animateIn) {
        modal.querySelector('.smooth-pare-animate').style.opacity = 0;
        setTimeout(() => {
            document.querySelector('body').removeChild(document.querySelector('.modal-wrap'));
        }, 400)
    }
}

const getRand = (min = 40, max = 120) => {
    return Math.random() * (max - min) + min;
}



const megaShitModal1 = (el) => {
    megaShitAnimate(
        megaShitConstructor([
            ['Польза', getRand()],
            ['Эффективность', getRand()],
            ['Важность', getRand()],
            ['Пригодность', getRand()],
            ['Практичность', getRand()],
            ['Выгода', getRand()],
            ['Применимость', getRand()],
            ['Функциональность', getRand()],
            ['Надежность', getRand()],
            ['Рациональность', getRand()],
            ['Удобство', getRand()],
            ['Качество', getRand()],
            ['Результативность', getRand()],
            ['Оптимизация', getRand()],
            ['Смысл', getRand()],
            ['Ценность', getRand()],
            ['Расходы', getRand()],
            ['Экономия', getRand()],
            ['Инвестиция', getRand()],
            ['Разумность', getRand()]
        ])
    );
}

const megaShitModal2 = (el) => {
    megaShitAnimate(
        megaShitConstructor([
            ['Опыт', getRand()],
            ['Навыки', getRand()],
            ['Знания', getRand()],
            ['Компетенции', getRand()],
            ['Профессионализм', getRand()],
            ['Опытность', getRand()],
            ['Умения', getRand()],
            ['Технические навыки', getRand()],
            ['Руководство', getRand()],
            ['Профессионалы', getRand()],
            ['Опыт разработки', getRand()],
            ['Опыт работы с клиентами', getRand()],
            ['командная работа', getRand()],
            ['Опыт в проектах', getRand()],
            ['Управление проектами', getRand()],
            ['Практики', getRand()],
            ['Специалисты', getRand()]
        ])
    );
}
const megaShitModal3 = (el) => {
    megaShitAnimate(
        megaShitConstructor([
            ['Креативность', getRand()],
            ['Идеи', getRand()],
            ['Инновации', getRand()],
            ['Вдохновение', getRand()],
            ['Эксперименты', getRand()],
            ['Творчество', getRand()],
            ['Командная работа', getRand()],
            ['Коллектив', getRand()],
            ['Сотрудничество', getRand()],
            ['Совместная работа', getRand()],
            ['Развитие идей', getRand()],
            ['Конструктивность', getRand()],
            ['Решения', getRand()],
            ['Дизайн', getRand()],
            ['Разработка', getRand()],
            ['Концепция', getRand()],
            ['Аналитика', getRand()],
            ['Исследование', getRand()],
            ['Проекты', getRand()],
            ['Процессы', getRand()],
            ['Мозговой штурм', getRand()]
        ])
    );
}