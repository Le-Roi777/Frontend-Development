
document.addEventListener("DOMContentLoaded", function () {

    let countDownDate = new Date("August 22, 2020 00:00:00").getTime();

    let x = setInterval(function() {

    let now = new Date().getTime();
        
    let distance = countDownDate - now;
        
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
        
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("app_timer").innerHTML = "Expired";
    }
    }, 1000);

});