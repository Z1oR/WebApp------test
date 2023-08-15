let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';



// slide one
let nextslide = document.getElementById("next1");
nextslide.addEventListener('click', () => {
	document.getElementById("main").style.display = 'none';
	document.getElementById("listtarif").style.display = 'block';
})


//slide two
let nextslide1 = document.getElementById("next2");
nextslide1.addEventListener('click', () => {
	document.getElementById("listtarif").style.display = 'none';
	document.getElementById("listtarif2").style.display = 'block';
})


let nextslide2 = document.getElementById('next3');
nextslide2.addEventListener('click', () => {
	document.getElementById('listtarif2').style.display = 'none';
	document.getElementById('listtarif3').style.display = 'block';
})

let nextslide3 = document.getElementById('next4');
nextslide3.addEventListener('click', () => {
	document.getElementById('listtarif3').style.display = 'none';
	document.getElementById('container').style.display = 'block';
})







let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Нажмите чтобы оплатить");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Нажмите чтобы оплатить");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Нажмите чтобы оплатить");
		item = "3";
		tg.MainButton.show();
	}
});

let data = {
	item: item,
	
}

tg.sendData(JSON.stringify(data))


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });



let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = item
console.log(item)
// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);








