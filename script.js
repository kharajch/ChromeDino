console.log('Welcome to Dino game');
function dinojump() {
    let dino = document.getElementById('Dino');
    dino.classList.add("kawa");
    setTimeout(function () {
        dino.classList.remove("kawa");
    }, 1500);
    let an = "jump.mp3";
    let at = "audio/mp3";
    let ajump = document.getElementById('audio').innerHTML = "<audio autoplay ><source src=" + an + " type=" + at + "> </audio>";
    setTimeout(function () {
        let aj = document.getElementById('audio').innerHTML = "";
    }, 1000);
}
let sco = false;
function obs() {
    let obstacle = document.getElementById('obstacle');
    obstacle.classList.add('ob');
    sco = true;
    go = document.getElementById('Go');
    go.style.display = "none";
}
let score = 0;
setInterval(() => {
    let dino = document.getElementById('Dino');
    let obstacle = document.getElementById('obstacle');
    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    let offsetX = Math.abs(dx - ox);
    let offsetY = Math.abs(dy - oy);
    if (offsetX < 32 && offsetY < 46) {
        score += 1;
        /*alert('Game Over!');
        alert("Your Score Is : "+ score);*/
        go = document.getElementById('Go');
        go.style.display = "block";
        score = 0;
        sco = false;
        obstacle.classList.remove('ob');
        let tap = document.getElementById('tap');
        tap.innerHTML = "<h3>Tap to Start the Game Again!</h3>";
        tap.style.display = "block";
    }
    else if (sco) {
        score += 1;
        let sc = document.getElementById('score').innerHTML = "Your score is: " + score;
    }
}, 100);
function tap() {
    let tap = document.getElementById('tap');
    tap.style.display = "none";
}