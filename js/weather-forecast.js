$(document).ready(function () { 
  var settings = {
    "url": "https://api.data.gov.sg/v1/environment/4-day-weather-forecast",
    "method": "GET",
  };

  var tmrWeather;
  $.ajax(settings).done(function (response) {
  
    $('h4 span').html(`${response.items[0].forecasts[0].date}`); //display next day date
    tmrWeather=response.items[0].forecasts[0].forecast;
    var tempLow=response.items[0].forecasts[0].temperature.low; //value of lowest temp tmr
    var tempHigh=response.items[0].forecasts[0].temperature.high;//value of highest temp tmr
    newGame(tempLow,tempHigh);
  });

  function newGame(temp,tempHigh) {
    //temperature guessing game
    $(document).on('click','#buttonLow',function(e){
      event.preventDefault();
      var tempInput=document.getElementById("userGuess").value;
      var fb =document.getElementById("feedback");
      var status=checkTemp(tempInput);
      if (status){
        if (tempInput>temp){
        fb.innerHTML = "Colder";
        }
        else if (tempInput<temp){
        fb.innerHTML = "Warmer";

        }
        else if (tempInput==temp){
        fb.innerHTML = "You are right!";

        }
      }
      else{
        fb.innerHTML = "Enter a number between 18 and 40.";
      }

    });

    $(document).on('click','#buttonHigh',function(e){
      event.preventDefault();

      var tempHigherInput=document.getElementById("userGuessHigher").value;

      var fbHigh=document.getElementById("feedbackHigh");
      var status=checkTemp(tempHigherInput);
      if (status){
        if (tempHigherInput>tempHigh){
        fbHigh.innerHTML = "Colder";
        }
        else if (tempHigherInput<tempHigh){
        fbHigh.innerHTML = "Warmer";

        }
        else if (tempHigherInput==tempHigh){
        fbHigh.innerHTML = "You are right!";

        }
      }
      else{
      fbHigh.innerHTML = "Enter a number between 18 and 40.";
      }
    });

    function checkTemp(temp){
      if (isNaN(temp) || temp<=18 ||temp>40 ||temp=="") {             
        return false;
      } 
      else {                                        
        return true;   
      }
    }
  }

  $(document).on('click','#checkbutton',function(e){
    event.preventDefault();

    var weatherInput = [];
    $.each($("input[name='weather']:checked"), function(){
    weatherInput.push($(this).val());
 
    var bool=tmrWeather.toLowerCase().includes(weatherInput[0])
    //display feeback based on user input
    if (bool){
      document.getElementById("feedback").innerHTML = "You predicted the same weather as the weather forecast!";
    }
    else{
      document.getElementById("feedback").innerHTML = "Hmm...not the same as the forecast, but who knows the weather may change tomorrow";

    }
    $('#tmr-weather span').html(`${tmrWeather}`);


    });

    insertImage(tmrWeather);
    //display image based on weather forecast
    function insertImage(weather){
      if (weather.includes("windy")){

        $('.weather-img').html('<img src="images/wind.gif" />')

      }
      else if (weather.includes("fair")){

        $('.weather-img').html('<img src="images/fair.gif" />')

      }
      else if (weather.includes("overcast")){

        $('.weather-img').html('<img src="images/overcast.gif" />')

      }
      else if (weather.includes("rain")){

       $('.weather-img').html('<img src="images/rain.gif" />')

      }
      else if (weather.includes("showers")){

        $('.weather-img').html('<img src="images/thunderstorm.gif" />')

      }
      else if (weather.includes("sunny")){

       $('.weather-img').html('<img src="images/sunny.gif" />')

      }
      else if (weather.includes("cloudy")){

        $('.weather-img').html('<img src="images/cloudy.gif" />')

      }
      else{
       $('.weather-img').html('<img src="images/weather.gif" />')
      }
    }

  })
   
});
   