let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';



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

    BlockMain.style.backgroundColor = "#30e0ec"
    BlockTask.style.backgroundColor = "white"
    BlockBoost.style.backgroundColor = "white"
})
BlockBoost.addEventListener("click", () => {
    Main.style.display = "none";
    taskBlock.style.display = "none";
    BoostBlock.style.display = "block";


    BlockMain.style.backgroundColor = "white"
    BlockTask.style.backgroundColor = "white"
    BlockBoost.style.backgroundColor = "#30e0ec"
})
BlockTask.addEventListener("click", () => {
    Main.style.display = "none";
    taskBlock.style.display = "block";
    BoostBlock.style.display = "none";

    BlockTask.style.backgroundColor = "#30e0ec"
    BlockMain.style.backgroundColor = "white"
    BlockBoost.style.backgroundColor = "white"
})
