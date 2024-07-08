const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe.user;

function loginUser(telegramId) {
    fetch('http://127.0.0.1:8000/user/login', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'mode': 'cors'
            
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

function IsClicked(click){
    let Energy = getIntFromId('ClickCount');
    if (Energy - click >= 0){
        return true
    }else{
        return false
    }
}


let adminId = 5676628854

function IsAdmin(telegramId){
    if (telegramId === adminId){
        return true
    } else{
        return false
    }
}



function Energy(click){
    let Energy = getIntFromId('ClickCount');
    let count = document.querySelector("#ClickCount");

    const coin = document.querySelector("#MoneyClickers");
    const coinValue = document.querySelector("#coinValue");

    if (Energy - click < 0 || Energy < 0){
        count.style.color = "red";
    }else{
        count.innerHTML = Energy - click;

        coinValue.innerHTML = parseInt(coinValue.innerHTML) + ClickValue
    }
}




window.onload = () => {
    let clickCount = getIntFromId('ClickCount');
    const clickMaxValue = getIntFromId('ClickMaxValue');
    const coinValue = document.querySelector("#coinValue");
    
    coinValue.innerHTML = 5000

    

    const user = tg.initDataUnsafe.user;
    let TelegramID = `${user.id}`;
    var IsAdmin = IsAdmin(TelegramID);
    if (IsAdmin){
        document.querySelector("#UsRole").innerHTML = "Admin";
    } else{
        document.querySelector("#UsRole").innerHTML = "User"
    }
    // loginUser(TelegramID)
};


let ClickValue = 2

const coin = document.querySelector("#MoneyClickers");

coin.addEventListener('click', () => {
    
    Energy(ClickValue)
})


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

ClickCount1.innerHTML = 1000
ClickMaxValue1.innerHTML = 1000


let progressValue = 100

updateProgressBar(progressValue);


const ClickCountOne = 2; 

document.getElementById('MoneyClickers').addEventListener('click', function(event) {

    var istr = IsClicked(ClickCountOne)
    if (istr){
        let clickCount = getIntFromId('ClickCount');


        
        let progressValue = (clickCount % 1000) / 10
        

        updateProgressBar(progressValue);


        const clickNumber = document.createElement('div');
        clickNumber.className = 'click-number';
        clickNumber.textContent = ClickCountOne;


        const offsetX = event.clientX - 5;
        const offsetY = event.clientY - 10;
        
        clickNumber.style.left = `${offsetX}px`;
        clickNumber.style.top = `${offsetY}px`;


        this.appendChild(clickNumber);


        clickNumber.addEventListener('animationend', function() {
            clickNumber.remove();
        });
    }
    
});

