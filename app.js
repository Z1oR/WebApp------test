let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


const reloadInfoBtn = document.querySelector("#botStart");

reloadInfoBtn.addEventListener('click', () =>{
	const usercard = document.getElementById("usercard")
	usercard.innerHTML = `${tg.initDataUnsafe.user.username}`
})










