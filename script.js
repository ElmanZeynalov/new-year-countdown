const monthEl = document.getElementById('month');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const newYears = new Date(currentYear + 1, 0, 1);


// const newYears = " 1 jan 2024"
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const timeLeft = newYearsDate - currentDate;

    const totalSeconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);

    monthEl.innerHTML = months;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = minutes;
    secEl.innerHTML = seconds;

    // console.log(
    //
    //     months + " months, " +
    //     days  + " days, " +
    //     hours  + " hours, " +
    //     minutes  + " minutes, " +
    //     seconds + " seconds left"
    // );
}





countdown()
 setInterval(countdown,1000)


