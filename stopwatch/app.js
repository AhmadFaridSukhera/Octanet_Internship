// Variables for button

const startStopbtn = document.querySelector('.startStopBtn');
const resetBtn = document.querySelector('.resetBtn');


//variables for time values

let seconds =0;
let minutes = 0;
let hours = 0;

//variables for leading zero

let leadingSeconds =0;
let leadingMinutes =0;
let leadingHours =0;
// variable for set interval & timestatus
let interval = null;
let timeStatus = 'stopped';
//stop Watch function
function stopWatch()
{
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }

    if(seconds<10){
        leadingSeconds = '0' + seconds.toString();
    }
    else{
        leadingSeconds=seconds;
    }
    if(hours<10){
        leadingHours = '0' + hours.toString();
    }
    else{
        leadingHourse=hours;
    }
    if(minutes<10){
        leadingMinutes = '0' + minutes.toString();
    }
    else{
        leadingMinutes=minutes;
    }
    let displaytimer = document.getElementById('timer').innerText= leadingHours + ":" +leadingMinutes+ ":"+leadingSeconds;

}
//window.setInterval(stopWatch,1000);


startStopbtn.addEventListener('click',function(){

    if(timeStatus=="stopped"){
        interval = window.setInterval(stopWatch,1000);
        startStopbtn.innerHTML = ' <i class="fa-solid fa-pause" id="pause"></i>';
        timeStatus='started';
    }
    else{
        window.clearInterval(interval);
        startStopbtn.innerHTML = '  <i class="fa-solid fa-play" id="play"></i> ';
        timeStatus='stopped';
    }
});

resetBtn.addEventListener('click',function(){

    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerText = "00:00:00";
    startStopbtn.innerHTML = '  <i class="fa-solid fa-play" id="play"></i>';
});