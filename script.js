let tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

const now = new Date();
(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;

document.addEventListener("DOMContentLoaded", function() {
    // Function to update progress bars
    function updateProgressBars() {
        const now = new Date();
        
        // Current hour progress
        const hourProgress = 100 - ((now.getMinutes() / 60) + (now.getSeconds() / 3600)) * 100;
        document.getElementById("hour-progress").value = hourProgress;
        document.getElementById("hour-value").textContent = hourProgress.toFixed(3) + "%";
        
        // Current day progress
        const dayProgress = 100 - ((now.getHours() + (now.getMinutes() / 60) + (now.getSeconds() / 3600)) / 24) * 100;
        document.getElementById("day-progress").value = dayProgress;
        document.getElementById("day-value").textContent = dayProgress.toFixed(3) + "%";
        
        // Current month progress
        const secInMonth = (now - Date.UTC(now.getFullYear(), now.getMonth(), 0)) / 1000;
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        const monthProgress = 100 - (secInMonth / (daysInMonth * 24 * 60 * 60)) * 100;
        // const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        // const monthProgress = ((now.getDate() - 1) / daysInMonth) * 100;
        document.getElementById("month-progress").value = monthProgress;
        document.getElementById("month-value").textContent = monthProgress.toFixed(5) + "%";
        
        // Current year progress
        const daysInYear = leapYear(now.getFullYear()) ? 366 : 365;
        const secInYear = (now - Date.UTC(now.getFullYear(), 0, 0)) / 1000;
        const yearProgress = 100 - (secInYear / (daysInYear*24*60*60)) * 100;
        document.getElementById("year-progress").value = yearProgress;
        document.getElementById("year-value").textContent = yearProgress.toFixed(6) + "%";
        
        // Expected life progress
        // const birthDate = new Date(document.getElementById("birth-date").value);
        // const lifeExpectancy = parseInt(document.getElementById("life-expectancy").value);
        // if (!isNaN(lifeExpectancy)) {
        //     const totalLifeSeconds = lifeExpectancy * 365 * 24 * 60 * 60;
        //     const elapsedLifeSeconds = (now - birthDate) / 1000;
        //     const lifeProgress = (elapsedLifeSeconds / totalLifeSeconds) * 100;
        //     document.getElementById("life-progress").value = 100 - lifeProgress;
        //     document.getElementById("life-value").textContent = lifeProgress.toFixed(7) + "%";
        // }
    }

    // Update progress bars initially
    updateProgressBars();

    // Update progress bars every second
    setInterval(updateProgressBars, 1000);
});



const startBtn = document.querySelector('.btn-start'); 
const session = document.querySelector('.minutes'); 
let myInterval; 
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent)

  if(state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      // Function code here.
    }
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Session has already started.')
  }
}


// drawLines();

// function getHeight(){
//   return window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;
// }

// function drawLines(){
//   const lines = document.getElementsByClassName('line');
//   if(lines.length) {
//     for (let i = 0; i < lines.length; i++) {
//         document.body.removeChild(lines[i]);
//     }
//   }
  
//   for(i = 0; i < getHeight()/10; i++){
//     const line = document.createElement("div");  
//     line.className = `line line-${i}`;
//     line.style.top = `${i * 10}px`;
//     const time = Math.random() * 5;
//     line.style.animation = `lines ${time}s infinite`;
//     document.body.appendChild(line) ;
//   }
// }

// window.onresize = function(event) {
//   drawLines();
// };
