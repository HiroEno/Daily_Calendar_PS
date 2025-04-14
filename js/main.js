'use strict'

const calendarImage = document.getElementById("calendar");

let day = 0
day = today();

function makeImagePath(day){
    const day_ = day < 10 ? `0${day}` : day;
    return `img/${day_}.jpg`;
}

function today(){
    day = new Date().getDate();
    const todayImagePath = makeImagePath(day);
    calendarImage.src = todayImagePath;
    return day;
}

function previous(){
    day = day === 1 ? 31 : day - 1;
    const preImagePath = makeImagePath(day);
    calendarImage.src= preImagePath
}

function next(){
    day = day === 31 ? 1 : day + 1;
    const nextImagePath = makeImagePath(day);
    calendarImage.src= nextImagePath
}

function random(){
    for(let i=0; i<5 ; i++){
        let delay = 500 * i;
        setTimeout(() => {
            day = Math.round(Math.random()*30) + 1;
            let randomImagePath = makeImagePath(day);
            calendarImage.src = randomImagePath;
        }, delay);
    } 
}

