// Analog clock part
const hourNumber = document.querySelector(".hour-number")
const lines = document.querySelector(".lines")

var numArray = [];
var lineArray = [];

for (let i = 1; i <= 12; i++) {
    numArray.push(`<span style=" --index:${i} "><p>${i}</p></span>`);
}
hourNumber.insertAdjacentHTML('afterbegin', numArray.join(""))

for (let i = 1; i <= 60; i++) {
    lineArray.push(`<span style="--line-index:${i}"><p></p></span>`)
}
lines.insertAdjacentHTML("afterbegin", lineArray.join(""))


setInterval(() => {
    var time = new Date()
    var tSeconds = time.getSeconds()
    var tMinutes = time.getMinutes()
    var tHours = time.getHours()
    var seconds = document.querySelector(".seconds-hand")
    var minutes = document.querySelector(".minutes-hand")
    var hours = document.querySelector(".hours-hand")
    seconds.style.transform = `rotate(${tSeconds * 6}deg)`
    minutes.style.transform = `rotate(${tMinutes * 6}deg)`
    hours.style.transform = `rotate(${tHours * 30 + tMinutes * 0.5}deg)`

}, 1000)



// Digital clock part

var hours = document.querySelector(".hours")
var minutes = document.querySelector(".minutes")
var seconds = document.querySelector(".seconds")
var AM_PM=document.querySelector(".am-pm")

setInterval(() => {
    var timeDigital = new Date()
    if(timeDigital.getHours()>12){


if( timeDigital.getHours()-12<10) hours.innerHTML = "0" + (timeDigital.getHours()-12)

        AM_PM.innerHTML ="PM"


    }else{hours.innerHTML = timeDigital.getHours() 
        AM_PM.innerHTML="AM"
    }


    
    if(timeDigital.getMinutes()<10){
        minutes.innerHTML="0"+timeDigital.getMinutes()
    }else{
        minutes.innerHTML=timeDigital.getMinutes()
    }
    if(timeDigital.getSeconds()<10){
        seconds.innerHTML="0"+timeDigital.getSeconds()
    }else{
        seconds.innerHTML=timeDigital.getSeconds()
    }
   
   
},1000)


// Day Month Year


var days=document.querySelector(".days")
var months=document.querySelector(".months")
var years=document.querySelector(".years")
const monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"]

setInterval(()=>{
    var date=new Date();
    days.innerHTML=date.getDate()
    months.innerHTML=monthArray[date.getMonth()]
    years.innerHTML=date.getFullYear()
},1000)