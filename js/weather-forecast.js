$(document).ready(function () { 
    var settings = {
       "url": "https://api.data.gov.sg/v1/environment/4-day-weather-forecast",
       "method": "GET",
     };
     
     var tmrWeather;
    $.ajax(settings).done(function (response) {
       console.log(response);
      
      console.log("tmr: " + response.items[0].forecasts[0].date);
      $('h4 span').html(`${response.items[0].forecasts[0].date}`);
     tmrWeather=response.items[0].forecasts[0].forecast;
     console.log(tmrWeather);

     
     var tempLow=response.items[0].forecasts[0].temperature.low;
     var tempHigh=response.items[0].forecasts[0].temperature.high;
     console.log("tommorrow temp low: " + response.items[0].forecasts[0].temperature.low);
   
     console.log("tommorrow temp high: " + response.items[0].forecasts[0].temperature.high);
     console.log("2 days later: " + response.items[0].forecasts[1].date);
     //$('#tmr-weather span').html(`${tmrWeather}`);
     newGame(tempLow,tempHigh);
     
     
    });
   
    function newGame(temp,tempHigh) {
	
	
  
      $(document).on('click','#buttonLow',function(e){
              event.preventDefault();
              var tempInput=document.getElementById("userGuess").value;
              if (tempInput>temp){
                document.getElementById("feedback").innerHTML = "lower";
                }
                else if (tempInput<temp){
                  document.getElementById("feedback").innerHTML = "higher";
              
                }
                else if (tempInput==temp){
                  document.getElementById("feedback").innerHTML = "yes";
              
                }
              
      });
    
      $(document).on('click','#buttonHigh',function(e){
        event.preventDefault();
        
        var tempHigherInput=document.getElementById("userGuessHigher").value;
        if (tempHigherInput>tempHigh){
          document.getElementById("feedbackHigh").innerHTML = "lower";
          }
          else if (tempHigherInput<tempHigh){
            document.getElementById("feedbackHigh").innerHTML = "higher";
        
          }
          else if (tempHigherInput==tempHigh){
            document.getElementById("feedbackHigh").innerHTML = "yes";
        
          }
       
});
    
    function checkVal(tempInput,temp){
      var feedbackLow=document.getElementById("feedback").innerHTML
      var feedbackHigh=document.getElementById("feedbackHigh").innerHTML
      if (tempInput>temp){
        document.getElementById("feedback").innerHTML = "lower";
        }
        else if (tempInput<temp){
          document.getElementById("feedback").innerHTML = "higher";
      
        }
        else if (tempInput==temp){
          document.getElementById("feedback").innerHTML = "yes";
      
        }
        //checkWeather();
        
    }
  }
   
     $(document).on('click','#checkbutton',function(e){
             event.preventDefault();
              var weatherInput = [];
     $.each($("input[name='weather']:checked"), function(){
     weatherInput.push($(this).val());
     alert(weatherInput[0]);
     var bool=tmrWeather.toLowerCase().includes(weatherInput[0])
     alert(bool)
     if (bool){
     document.getElementById("feedback").innerHTML = "You predicted the same weather as the weather forecast!";
     }
     else{
       document.getElementById("feedback").innerHTML = "Hmm...not the same as the forecast, but who knows the weather may change tomorrow";
   
     }
     //checkWeather();
     $('#tmr-weather span').html(`${tmrWeather}`);
     });
   
   insertImage(tmrWeather);
   
    function insertImage(weather){
      if (weather.includes("windy")){
      
         $('.weather-img').html('<img id="theImg" src="images/wind.gif" />')
        
      }
      else if (weather.includes("fair")){
      
        $('.weather-img').html('<img id="theImg" src="images/fair.gif" />')
       
     }
     else if (weather.includes("overcast")){
      
      $('.weather-img').html('<img id="theImg" src="images/overcast.gif" />')
     
   }
   else if (weather.includes("rain")){
      
    $('.weather-img').html('<img id="theImg" src="images/rain.gif" />')
   
 }
 else if (weather.includes("showers")){
      
  $('.weather-img').html('<img id="theImg" src="images/thunderstorm.gif" />')
 
}
else if (weather.includes("sunny")){
      
  $('.weather-img').html('<img id="theImg" src="images/sunny.gif" />')
 
}
else if (weather.includes("cloudy")){
      
  $('.weather-img').html('<img id="theImg" src="images/cloudy.gif" />')
 
}
else{
  $('.weather-img').html('<img id="theImg" src="images/weather.gif" />')
}
    }
   
     })
   
   });
   