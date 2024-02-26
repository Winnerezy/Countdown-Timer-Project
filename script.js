const counting = document.getElementById("counting");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

//getting the current date
let currentDate = new Date();
//console.log(currentDate);
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
const futureDates = new Date(currentYear, currentMonth, currentDay + 10, 9, 30, 0);

//console.log(futureDates);

//future dates for the count down
const year = futureDates.getFullYear();
// console.log(currentDate)
let month = futureDates.getMonth();
//console.log(month)
const hour = futureDates.getHours();
const minute = futureDates.getMinutes();
const second = futureDates.getSeconds();

//gets the current month from the months array
month = months[month];

//getting the day of 10 days ahead from the weekDays array
const weekDay = weekDays[futureDates.getDay()]
const date = futureDates.getDate();
//console.log(date);
counting.textContent = `Count Down Ends On ${weekDay}, ${date} ${month} ${year} At ${hour}:${minute}AM `


//console.log(weekDay);

// getting the time of the giveaway
const futureTime = futureDates.getTime();
//console.log(futureTime)

function countDownTimer(){
    const today = new Date().getTime();
    
    const currentTime = futureTime - today;
    
    //converts the milliseconds into whole number values
    let aDay = Math.floor(currentTime / (24 * 60 * 60 * 1000));
    let anHour = Math.floor((currentTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let aMinute = Math.floor((currentTime % (60 * 60 * 1000)) / (60 * 1000));
    let aSecond = Math.floor((currentTime % (60 * 1000)) / 1000);
    //console.log(anHour)

    days.textContent = padZero(aDay);
    hours.textContent = padZero(anHour);
    minutes.textContent = padZero(aMinute);
    seconds.textContent = padZero(aSecond);

}

const interval = setInterval(countDownTimer, 1000);
countDownTimer();

//to add "0" to the beginning of the numbers if they are less than 10
function padZero(value){
    return value < 10? "0" + value : value;
}

