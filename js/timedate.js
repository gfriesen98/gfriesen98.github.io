function getDateTime(){
  let time,today,doweek,date,currentHour,timeElement,dataElement,dayElement;
  let mS = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  let dow = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let isam;

  today = new Date();
  date = mS[today.getMonth()]+' '+today.getDate() +' '+ today.getFullYear();
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

  const client = require('twitter-lite');
  const t = new client({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: key, // from Twitter.
    consumer_secret: secret, // from Twitter.
    access_token_key: a, // from your User (oauth_token)
    access_token_secret: aa // from your User (oauth_token_secret)
  })

  t.get("account/verify_credentials").then(res => {
    console.log(res)
  }).catch(console.error);

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
    setGreeting();
  }).catch((error) => {
    console.log(error);
  })
}

function setWeather(data){
  let cels = " "+Math.round(parseFloat(data.main.temp)-273.15);
  document.getElementById('curr').innerHTML = data.weather[0].description + cels + '&deg;C';
}

window.onload = () => {getWeather()};
