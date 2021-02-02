$(document).ready(function () { 
    var settings = {
       "url": "https://api.data.gov.sg/v1/environment/24-hour-weather-forecast",
       "method": "GET",
     };
     var todayWeather;
    $.ajax(settings).done(function (response) {
       console.log(response);
      
      console.log("today: " + response.items[0].general.forecast);
     todayWeather=response.items[0].general.forecast;
     console.log(todayWeather);
   $('#today-weather span').html(`${todayWeather}`);
   
   console.log("low: " + response.items[0].general.temperature.low);
   console.log("high: " + response.items[0].general.temperature.high);
   $('#today-low').html(`${response.items[0].general.temperature.low}`);
   $('#today-high').html(`${response.items[0].general.temperature.high}`);
    });
    let today = new Date().toISOString().slice(0, 10)
   
   console.log(today)
    $('h4 span').html(`${today}`);
    
   });//eof documentready