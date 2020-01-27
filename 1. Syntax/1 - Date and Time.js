
var date = new Date();
day = 	date.getDay();

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log("Today is : " + days[day]);

var hour = date.getHours()
var minute = date.getMinutes()
var second = date.getSeconds()

if(hour <= 12 ){
	hour = hour - 12;
	hour = hour + " AM";
}

if(hour > 12 ){
	hour = hour - 12;
	hour = hour + " PM";
}

console.log("current time is: " + hour + " : " + minute + " : " + second );