
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

  if(isam){
    document.getElementById("greeting").innerHTML = "good afternoon";
  } else {
    document.getElementById("greeting").innerHTML = "good morning";
  }

  dataElement = document.getElementById("date");
  dataElement.innerHTML = doweek + ", " + date;

  timeElement = document.getElementById("time");
  timeElement.innerHTML = time;
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
  }).catch((error) => {
    console.log(error);
  })
}

function setWeather(data){
  let cels = " "+Math.round(parseFloat(data.main.temp)-273.15);
  document.getElementById('curr').innerHTML = data.weather[0].description + cels + '&deg;C';
}

window.onload = () => {getWeather(); getDateTime()};
