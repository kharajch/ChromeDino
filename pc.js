onkeydown = function (e) {
    let keycode = e.keyCode;
    if (keycode == 32 || keycode == 38) {
        document.getElementById('Go').innerHTML = 'Game Over!';
        dinojump();
        obs();
        tap();
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
    }
}