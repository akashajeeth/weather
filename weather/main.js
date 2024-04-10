const api = { // use this only  to practice
  key: "7e3f21edee540e6110af347b55eb1ab2",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.getElementById('search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}
function getResults(query){
  fetch(api.base + "weather?q=" + query + "&units=metric&appid=" + api.key).then(weather=>{
    if(weather.ok==false){
      console.error("Problem in fetching the url");
  } 
  else{
      return weather.json();
  }       
  }).then(response=>{
    

    console.log(response);
    displayResults(response);
  }).catch(error=>{
    console.log(error);
  })

  
}

function displayResults(weather){  

  var city=document.getElementById("city");
  city.innerText=weather.name+","+weather.sys.country;

  var date=document.getElementById("date");
  var date1= new Date();
  
  date.innerText=date1;

  var temp=document.getElementById("temp");
  temp.innerText=weather.main.temp+"°C";


  var wet=document.getElementById("weather");
  wet.innerText=weather.weather[0].main;

  var hilow=document.getElementById("hi-low");
  hilow.innerText=weather.main.temp_min+"°C"+"/"+weather.main.temp_max+"°C";


}
getResults("Chengalpattu");