// let tg = window.Telegram.WebApp;

// tg.expand();
const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe.user;
const userInfo = `ID: ${user.id}, Имя: ${user.first_name} ${user.last_name}, Username: ${user.username}`;
    
document.getElementById('user-info').innerText = userInfo;

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

ClickCount1.innerHTML = 250
ClickMaxValue1.innerHTML = 500

window.onload = () => {
    const clickCount = getIntFromId('ClickCount');
    const clickMaxValue = getIntFromId('ClickMaxValue');
    
    let progressValue = 50
    
    updateProgressBar(progressValue);
    console.log(`ClickCount: ${clickCount}`);
    console.log(`ClickMaxValue: ${clickMaxValue}`);



    connectToFastApi(TelegramID)
};



const ClickCountOne = 2; 

document.getElementById('MoneyClickers').addEventListener('click', function(event) {

    const clickNumber = document.createElement('div');
    clickNumber.className = 'click-number';
    clickNumber.textContent = ClickCountOne;


    const rect = event.target.getBoundingClientRect();

    const offsetX = event.clientX - 5;
    const offsetY = event.clientY - 10;
    
    clickNumber.style.left = `${offsetX}px`;
    clickNumber.style.top = `${offsetY}px`;


    this.appendChild(clickNumber);


    clickNumber.addEventListener('animationend', function() {
        clickNumber.remove();
    });
});

