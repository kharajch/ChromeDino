onkeydown = function (e) {
    let keycode = e.keyCode;
    if (keycode == 32 || keycode == 38) {
        document.getElementById('Go').innerHTML = 'Game Over!';
        dinojump();
        obs();
        tap();
        document.querySelector(".main").style.display = 'block';
        document.querySelector(".main2").style.display = 'none';
        let media = window.matchMedia("(max-width: 175px)");
        if (media.matches) {
            document.querySelector(".main").style.display = 'none';
            let aj = document.getElementById('audio').innerHTML = "";
        }
    }
    if (keycode == 80) {
        go = document.getElementById('Go');
        go.innerHTML = "Game Paused";
        go.style.display = "block";
        sco = false;
        obstacle.classList.remove('ob');
        let tap = document.getElementById('tap');
        tap.innerHTML = "<h3>Tap to Start the Game Again!</h3>";
        tap.style.display = "block";
        let media = window.matchMedia("(max-width: 175px)");
        if (media.matches) {
            document.querySelector(".main").style.display = 'none';
            let aj = document.getElementById('audio').innerHTML = "";
        }
    }
}
document.addEventListener("click", function(){
    document.querySelector(".main").style.display = 'block';
    document.querySelector(".main2").style.display = 'none';
    dinojump();
    obs();
    tap();
    let media = window.matchMedia("(max-width: 175px)");
        if (media.matches) {
            document.querySelector(".main").style.display = 'none';
            let aj = document.getElementById('audio').innerHTML = "";
        }
});