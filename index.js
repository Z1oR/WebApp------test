const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe.user;

function loginUser(telegramId) {
    fetch('http://127.0.0.1:8000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ telegramId: telegramId })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Обработка ответа
        if (data.message === 'User created successfully') {
            console.log(`User ID: ${data.user_id}`);
        } else if (data.message === 'User already exists') {
            console.log(`User ID: ${data.user_id}`);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// ${user.id}



window.onload = () => {
    const clickCount = getIntFromId('ClickCount');
    const clickMaxValue = getIntFromId('ClickMaxValue');
    
    let progressValue = 50
    
    updateProgressBar(progressValue);
    console.log(`ClickCount: ${clickCount}`);
    console.log(`ClickMaxValue: ${clickMaxValue}`);


    let TelegramID = user.id
    loginUser(TelegramID)
};








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

