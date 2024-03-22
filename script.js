var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var showCurrentTime = function () {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "normaltime.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == partytime) {
        image = "party-image.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "wakeup-cat.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "lunch.jpeg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "nap.jpeg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "morning.jpg";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "evening.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "afternoon.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);