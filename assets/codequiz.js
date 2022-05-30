
    var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "seconds left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Out of Time!");
    }
}