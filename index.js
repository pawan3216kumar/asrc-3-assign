let timeRemaining;
let timeIntervalId;

function startTimer(){
    let hours = Number(document.getElementById("hours").value);
    let minutes = Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);

    let timeRemaining = hours * 3600 + seconds * 60 + seconds;

    timeIntervalId = setInterval(function(){
         timeRemaining--;

         let hrs = Math.floor(timeRemaining / 3600);
         let min = Math.floor(timeRemaining%3600 / 60);
         let sec = timeRemaining % 60;

         document.getElementById("hours").value = hrs;
         document.getElementById("minutes").value = min;
         document.getElementById("seconds").value = sec;

         if(timeIntervalId <= 0){
            clearInterval(timeIntervalId)
            timeIntervalId = null;
         }

    } ,1000)
}

function pauseTimer(){
    clearInterval(timeIntervalId)
    timeIntervalId = null;
}

function resetTimer(){
   clearInterval(timeIntervalId);
   timeIntervalId = null;

   document.getElementById("hours").value = 0;
   document.getElementById("minutes").value = 0;
   document.getElementById("seconds").value = 0;



}