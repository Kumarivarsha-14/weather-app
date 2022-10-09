const weatherApi= {
key:"6bb6a9b21801ea9ef9da0f39f5c264ac",
baseurl:" https://api.openweathermap.org/data/2.5/weather"
}

const searchinputbox=document.getElementById('input-btn');
searchinputbox.addEventListener('keypress',(event)=>
{
    if(event.keyCode==13){
    console.log(searchinputbox.value);
    getWeatherReport(searchinputbox.value);
    }
});

function getWeatherReport(city){
   // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // 6bb6a9b21801ea9ef9da0f39f5c264ac
  fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather=>{
  return weather.json();
  }).then(showWeatherReport);
  }

  function showWeatherReport(weather){
    console.log(weather);
    let city= document.getElementById('city');
    city.innerText=`${weather.name},${weather.sys.country}`;
    let temprature=document.getElementById('temp');
    temprature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
    let minmaxtemp= document.getElementById('min-max');
    minmaxtemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weathertype=document.getElementById('weather');
    weathertype.innerText=`${weather.weather[0].main}`;

    let data=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);
    
    if(weathertype.textContent =="Clouds"){
      document.body.color="red";
    }
  }
  function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
    let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}) ,${year}`;
  }