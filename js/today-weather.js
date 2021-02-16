$(document).ready(function () { 

  var settings = {
    "url": "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
    "method": "GET",
  };
  var todayWeather;
  $.ajax(settings).done(function (response) {
    
    todayWeather=response.items[0].general.forecast;

    $('#today-weather span').html(`${todayWeather}`);//display current weather
    $('#today-low').html(`${response.items[0].general.temperature.low}`);//display current temp range
    $('#today-high').html(`${response.items[0].general.temperature.high}`);

    insertImage(todayWeather.toLowerCase());
    //display weather animations based on current weather
    function insertImage(weather){
      if (weather.includes("windy")){

      $('#weather-today-img').html('<img src="images/wind.gif" />')

      }
      else if (weather.includes("fair")){

      $('#weather-today-img').html('<img src="images/fair.gif" />')

      }
      else if (weather.includes("overcast")){

      $('#weather-today-img').html('<img src="images/overcast.gif" />')

      }
      else if (weather.includes("rain")){

      $('#weather-today-img').html('<img src="images/rain.gif" />')

      }
      else if (weather.includes("showers")){

      $('#weather-today-img').html('<img src="images/thunderstorm.gif" />')

      }
      else if (weather.includes("sunny")){

      $('#weather-today-img').html('<img src="images/sunny.gif" />')

      }
      else if (weather.includes("cloudy")){

      $('#weather-img').html('<img src="images/cloudy.gif" />')

      }
      else{
      $('#weather-img').html('<img src="images/weather.gif" />')
      }
  }
  });
  let today = new Date().toISOString().slice(0, 10)
  $('h4 span').html(`${today}`);//display today's date
      
   });