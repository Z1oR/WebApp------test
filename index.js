let tg = window.Telegram.WebApp;

tg.expand();


function updateProgressBar(value) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = value + '%';
}
function getIntFromId(id) {
    const element = document.getElementById(id);
    if (element) {
        const text = element.textContent || element.innerText;
        return parseInt(text, 10);
    }
    return null;
}

let ClickCount1 = document.querySelector("#ClickCount");
let ClickMaxValue1 = document.querySelector("#ClickMaxValue");

ClickCount1.innerHTML = 500
ClickMaxValue1.innerHTML = 500

window.onload = () => {
    const clickCount = getIntFromId('ClickCount');
    const clickMaxValue = getIntFromId('ClickMaxValue');
    
    let progressValue = 100
    
    updateProgressBar(progressValue);
    console.log(`ClickCount: ${clickCount}`);
    console.log(`ClickMaxValue: ${clickMaxValue}`);
};


// Значение переменной ClickCountOne
const ClickCountOne = 10; // Пример значения, измените по необходимости

document.getElementById('MoneyClickers').addEventListener('click', function(event) {
    // Создаем элемент для отображения числа
    const clickNumber = document.createElement('div');
    clickNumber.className = 'click-number';
    clickNumber.textContent = ClickCountOne;

    // Устанавливаем начальное положение элемента относительно контейнера
    const rect = event.target.getBoundingClientRect();
    // const offsetX = event.clientX - rect.left;
    // const offsetY = event.clientY - rect.top;
    const offsetX = event.clientX - 5;
    const offsetY = event.clientY - 10;
    
    clickNumber.style.left = `${offsetX}px`;
    clickNumber.style.top = `${offsetY}px`;

    // Добавляем элемент к блоку
    this.appendChild(clickNumber);

    // Удаляем элемент после завершения анимации
    clickNumber.addEventListener('animationend', function() {
        clickNumber.remove();
    });
});

