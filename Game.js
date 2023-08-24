// Declare Global variables
let timer = 60;

let newhit;
let score = 0;
let min = 1;
let max = 20;

//function to create bubbles
function makeBubble() {
    let clutter = "";
    for (let i = 0; i <= 107; i++) {
        clutter += `  <div class="bubble">${Math.round(
            Math.random() * (min + max) + min
        )}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}



//function to show timer
function newtimer() {
    setInterval((e) => {
        // if time is Over
        if (timer <= 0) {
            clearInterval(timer);

            document.querySelector("#pbtm").style.display = "none";
            document.querySelector(".gameover").innerHTML = `<h1>GameOver!</h1>`;
            document.querySelector(
                ".final"
            ).innerHTML = `<h1>Your Final Score is : ${score}</h1>`;
        }
        //decrease timer
        else {
            timer--;
        }
        document.querySelector("#timer").innerHTML = timer;
    }, 1000);
}



//function to create and show hit value
function hitme() {
    newhit = Math.floor(Math.random() * (min + max) + min);
    document.querySelector("#hit").innerHTML = newhit;
}



//function to show Score

function myScore() {
    score += 10;
    document.querySelector("#score").innerHTML = score;
}



//function to that increase score , change bubbles when hit == clicked bubble ,create new hit value
function GameChanger() {
    document.querySelector("#pbtm").addEventListener("click", (e) => {
        let clickNumber = Number(e.target.textContent);
        if (clickNumber == newhit) {
            myScore();
            makeBubble();
            hitme();
        }
    });
}



//function calls
newtimer();
makeBubble();
hitme();
GameChanger();
