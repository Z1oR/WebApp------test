let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

// let username = document.querySelector("#username");

// username.innerHTML = `${tg.initDataUnsafe.user.username}`

let BlockMain = document.querySelector(".BlockMain");
let BlockBoost = document.querySelector(".BlockBoost");
let BlockTask = document.querySelector(".BlockTask");


let Main = document.querySelector("#Main");
let taskBlock = document.querySelector(".taskBlock");
let BoostBlock = document.querySelector(".BoostBlock");

BlockMain.addEventListener("click", () => {
    Main.style.display = "block";
    taskBlock.style.display = "none";
    BoostBlock.style.display = "none";

    BlockMain.style.borderBottom = "5px solid blue"
    BlockTask.style.borderBottom = "none"
    BlockBoost.style.borderBottom = "none"
})
BlockBoost.addEventListener("click", () => {
    Main.style.display = "none";
    taskBlock.style.display = "none";
    BoostBlock.style.display = "block";


    BlockMain.style.borderBottom = "none"
    BlockTask.style.borderBottom = "none"
    BlockBoost.style.borderBottom = "5px solid blue"
})
BlockTask.addEventListener("click", () => {
    Main.style.display = "none";
    taskBlock.style.display = "block";
    BoostBlock.style.display = "none";

    BlockTask.style.borderBottom = "5px solid blue"
    BlockMain.style.borderBottom = "none"
    BlockBoost.style.borderBottom = "none"
})
