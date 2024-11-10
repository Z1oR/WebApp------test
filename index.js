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





// const grid = document.querySelector('.grid');
// const starIndices = [3, 7, 12, 18, 23]; // Индексы клеток со звездами

// // Создаем 25 ячеек
// for (let i = 0; i < 25; i++) {
//     const cell = document.createElement('div');
//     cell.classList.add('cell');

//     // Если индекс совпадает со звездой, добавляем элемент звезды
//     if (starIndices.includes(i)) {
//         const star = document.createElement('div');
//         star.classList.add('star');
//         cell.appendChild(star);
//     }

//     // Добавляем обработчик клика для раскрытия звезды
//     cell.addEventListener('click', () => {
//         cell.classList.add('revealed');
//     });

//     grid.appendChild(cell);
// }



function randomIntFromInterval(min, max) { 

    return Math.floor(Math.random() * (max - min + 1) + min);
}
  

const grid = document.querySelector('.grid');
const starIndices = []; // Массив для хранения индексов ячеек со звездами

function createStars(CountMins) {
    // Очищаем старые звезды и закрываем старые ячейки
    const cells = grid.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.classList.remove('revealed'); // Убираем класс открытия
        const star = cell.querySelector('.star');
        if (star) {
            star.remove(); // Удаляем старую звезду
        }
    });

    // Генерация новых звезд
    starIndices.length = 0; // Очищаем массив индексов
    for (let i = 0; i < CountMins; i++) {
        const intager = randomIntFromInterval(1, 25);
        starIndices.push(intager);
    }

    // Перебираем все ячейки и добавляем звезды в случайные ячейки
    cells.forEach((cell, index) => {
        if (starIndices.includes(index)) {
            const star = document.createElement('div');
            star.classList.add('star');
            cell.appendChild(star);
            cell.classList.add('revealed'); // Добавляем класс для открытия ячейки
        }
    });
}

// Функция для генерации случайного числа в заданном интервале
function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Инициализация сетки из 25 ячеек
for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

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
    if (CountMins < 5) {
        CountMins++;
        countMines.innerHTML = CountMins;
    }
});

getSignal.addEventListener("click", () => {

    VievSignal(CountMins); // Запускаем функцию с задержкой

});

// Функция для отображения сигнала (создает случайные ячейки и открывает их)
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
    
}
