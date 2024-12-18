const particlesContainer = document.querySelector('.background-animation');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Устанавливаем случайную начальную позицию
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    
    // Устанавливаем случайную длительность анимации от 5 до 10 секунд
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';

    particlesContainer.appendChild(particle);

    // Удаляем частицу после завершения анимации
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

// Создаем новую частицу каждую 100 миллисекунд
setInterval(createParticle, 50);






const grid = document.querySelector('.grid');
const starIndices = []; // Массив для хранения индексов ячеек со звездами

// Функция для создания анимации частиц
function createParticlesAroundCell(cell) {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    cell.appendChild(particlesContainer);

    for (let i = 0; i < 20; i++) { // Создаем 20 частиц
        const particle = document.createElement('div');
        particle.classList.add('particlea');

        // Устанавливаем случайные позиции и анимации
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`; // Длительность от 0.5 до 1 секунды

        particlesContainer.appendChild(particle);

        // Удаляем частицу через 1 секунду
        setTimeout(() => particle.remove(), 1000);
    }

    // Удаляем контейнер с частицами через 1 секунду
    setTimeout(() => particlesContainer.remove(), 1000);
}

// Функция для автоматического открытия ячеек и создания анимации
function createStars(CountMins) {
    const cells = grid.querySelectorAll('.cell');

    // Очищаем старые звезды и закрываем ячейки
    cells.forEach(cell => {
        cell.classList.remove('revealed');
        const star = cell.querySelector('.star');
        if (star) star.remove();
    });

    starIndices.length = 0; // Очищаем массив индексов
    for (let i = 0; i < CountMins; i++) {
        const index = randomIntFromInterval(0, 24);
        starIndices.push(index);
    }

    // Добавляем звезды и анимацию в случайные ячейки
    cells.forEach((cell, index) => {
        if (starIndices.includes(index)) {
            const star = document.createElement('div');
            star.classList.add('star');
            cell.appendChild(star);
            cell.classList.add('revealed');

            // Создаем анимацию частиц для открытой ячейки
            createParticlesAroundCell(cell);
        }
    });
}

// Генерация случайного числа в заданном интервале
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Инициализация сетки из 25 ячеек
for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

// Управление количеством мин
const countMines = document.querySelector("#countMines");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const getSignal = document.querySelector("#getSignal");

let CountMins = 3;
countMines.innerHTML = CountMins;

minus.addEventListener("click", () => {
    if (CountMins > 1) {
        CountMins--;
        countMines.innerHTML = CountMins;
    }
});

plus.addEventListener("click", () => {
    if (CountMins < 7) {
        CountMins++;
        countMines.innerHTML = CountMins;
    }
});

getSignal.addEventListener("click", () => {
    VievSignal(CountMins);
});

// Функция для отображения сигнала
function VievSignal(CountMins) {
    if (CountMins == 1){
        CountMins = 5
        createStars(CountMins);
    }
    if (CountMins == 2){
        CountMins = 5
        createStars(CountMins)
    }
    if (CountMins == 3){
        CountMins = 5
        createStars(CountMins)
    }
    if (CountMins == 4){
        CountMins = 5
        createStars(CountMins)
    }
    if (CountMins == 5){
        CountMins = 5
        createStars(CountMins)
    }
    if (CountMins == 6){
        CountMins = 6
        createStars(CountMins)
    }
    if (CountMins == 7){
        CountMins = 7
        createStars(CountMins)
    }
}
