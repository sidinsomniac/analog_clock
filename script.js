const hour = document.querySelector('#hourhand');
const minute = document.querySelector('#minutehand');
const second = document.querySelector('#secondhand');
const audi = new Audio('tick.mp3');

var date = new Date();
let Hours = date.getHours();
let Minutes = date.getMinutes();
let Seconds = date.getSeconds();

let hrPosition = Hours * 30 + Minutes*0.5;
let minPosition = (Minutes * 6)+(Seconds/10);
let secPosition = Seconds * 6;


function AutomateClock(){
	secPosition += 6;
	minPosition += 0.1;
	hrPosition += 1/120;
	hour.style.transform = "rotate("+hrPosition+"deg)";
	minute.style.transform = "rotate("+minPosition+"deg)";
	second.style.transform = "rotate("+secPosition+"deg)";
	audi.play();
}

setInterval(AutomateClock,1000);