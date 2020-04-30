function getDateTime(){
  let time,today,doweek,date,currentHour,timeElement,dataElement,dayElement;
  let mS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let dow = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
  let isam;
  let greetings = [
    "Mirë dita",
    "مرحبا",
    "Zdravo",
    "Здравейте",
    "Bonjour",
    "Χαίρε",
    "Aloha",
    "שלום",
    "こんにちは",
    "안녕",
    "你好",
    "Cześć",
    "Привет",
    "Chào bạn"
  ];

  document.getElementById("hello-lang").innerHTML = greetings[Math.floor(Math.random()*greetings.length)];

  today = new Date();
  date = mS[today.getMonth()]+'.'+today.getDate() +'/'+ today.getFullYear();
  currentHour = today.getHours();
  doweek = dow[today.getDay()]

  if(currentHour > 12){
    currentHour -= 12;
    time = currentHour + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + "pm";
    isam = true;
  }else{
    time = today.getHours() + ":" + today.getMinutes() + "am";
    isam = false;
  }

  // if(isam){
  //   document.getElementById("greeting").innerHTML = "good afternoon";
  // } else {
  //   document.getElementById("greeting").innerHTML = "good morning";
  // }

  dataElement = document.getElementById("date");
  dataElement.innerHTML = doweek + ", " + date;

  timeElement = document.getElementById("time");
  timeElement.innerHTML = time;
}

function setGreeting(){
  let a = '605886050-fpw5g88DWfiqrox1mpyOjwFBX41BgxJlDooBpPJT';
  let aa = 'kHtR76KQbW8PQnhXcCPUkCvDZfOhk2u2HnuEB5AYIjdmJ';
  let key = 'IrBHrFg8CjIDHEo1bU4BY16BJ';
  let secret = 'URGlofTcMVy3R0WM91MzbfpnvTlBJNb399hLuB7Hwx9pGQi2if';
  var Twit = require('twit')
  var T = new Twit({
    consumer_key: key,
    consumer_secret: secret,
    app_only_auth: true
  })

  T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

}

function getWeather(){
  let key = '38cfb61dceeb2a0b49157d5c4fae246e';
  let winnipegId = '6183235';
  let url = `https://api.openweathermap.org/data/2.5/weather?id=${winnipegId}&appid=${key}`

  fetch(url).then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data);
    setWeather(data);
    getDateTime();
    // setGreeting();
  }).catch((error) => {
    console.log(error);
  })
}

function setWeather(data){
  let cels = " "+Math.round(parseFloat(data.main.temp)-273.15);
  document.getElementById('curr').innerHTML = data.weather[0].description + cels + '&deg;C';
}

window.onload = () => {getWeather()};
