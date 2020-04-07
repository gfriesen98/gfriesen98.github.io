var time,today,doweek,date,currentHour,timeElement,dataElement,dayElement;
var mS = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var dow = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

today = new Date();
date = mS[today.getMonth()]+' '+today.getDate() +' '+ today.getFullYear();
currentHour = today.getHours();
doweek = dow[today.getDay()]

if(currentHour > 12){
	currentHour -= 12;
	time = currentHour + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + "pm";
}else{
	time = today.getHours() + ":" + today.getMinutes() + "am";
}

dataElement = document.getElementById("date");
dataElement.innerHTML = date;

timeElement = document.getElementById("time");
timeElement.innerHTML = time + " - " + doweek;
