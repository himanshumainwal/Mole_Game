
var rat = document.getElementById("rat1, rat2, rat3, rat4, rat5, rat6");
var tink = new Audio("tink.mp3");
var tom = new Audio("tom.mp3");
var score = document.getElementById("score");
var game = document.getElementById("game");
var youwin = document.getElementById("youwin");
var count = 0;


setInterval(function () {
    var random = Math.floor(Math.random() * 6) + 1;
    var rat = "rat" + random;
    var ra = eval(rat);
    tink.play();
    ra.classList.add("animate");

    setTimeout(function () {
        ra.classList.remove("animate");
    }, 1000)

    ra.onclick = function () {
        count++;
        tom.play();
        score.innerText = count;
    }
}, 1000);


setInterval(function () {
    if (count >= 10) {
        youwin.style.display = "block";
        game.style.display = "none";
        tink.pause();
    }

}, 10)