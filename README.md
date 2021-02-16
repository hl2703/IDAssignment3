# IDAssignment3
Weather Village

Weather Village is a weather forecast app designed for the desktop which displays the current weather and allows users to guess the weather and temperature tomorrow. It is not like an ordinary weather forecast app, which only displays the weather. Weather village aims to create user interactivity and visual appeal by recreating a weather forecast in the form of a game. It allows users to input their weather predictions and check against the weather forecast, a temperature guessing game as well as having colourful visuals and characters. It also contains in-game characters which users can click on to read their dialogue. This will make it engaging for users and create a fun experience for them. 

Design process:
Weather village is designed for anyone who wishes to find out the weather, but in a fun, visual and interactive way. Weather village is inspired by role-playing games which involves players taking the role of a main character, which meets other in-game characters along the way. These games typically involves character dialogues and tasks being issued to the main character to complete. Weather village contains characters and mini games held by the in-game characters. Hence, the design, setting and game play is also largely inspired by these games, to make the weather forecast app engaging for users. To create the character dialogues and game layout, Bootstrap was used which allows more user interactivity. The weather forecast API from data.gov.sg was used to display the weather. The creation of this app involved first displaying the weather with the weather api, then coming out with the mini guessing games. During the design process, I had to look for suitable game background and fonts that will fit the theme of the game, as well as game characters to make the game more interesting. The colour scheme is brown, orange, green and blue as those are the colours of nature and village huts. I also designed the game title to make it look more visually appealing. Animations from lottiefiles.com was used, such as the weather and for the buttons.

Game setting:
The setting of the game takes place in a small village which is inhabited by a group of villagers and is in charge of forecasting the weather. The player takes the role of a new villager, who stumbles upon weather village. The player meets characters along the way, some of which challenge the player into a weather guessing game.

How to use the app:
The current weather and temperature is displayed on the main page. Click on the characters located all around the main page to read their dialogue. At the bottom of the main page there are two icons. Click on the sun icon to go to the weather forecast game, and the thermometer icon to go to the temperature guessing game. On the weather forecast page, users can guess the weather tomorrow by selecting one of the options and the weather forecast will be displayed for them to compare their guess. On the temperature forecast page, users can guess the temperature by typing in their guess and there will be hints whether their guess is warmer or colder than the temperature forecasted. 


Current features:
-  game title on main page
-  Current weather and temperature displayed with weather animations
-  In-game characters, Character dialogues: Users can click on each character to read their dialogue
-  Weather forecast navigation menu: for users to navigate to weather forecast and temperature games
-  weather guessing game-users can guess the weather against the weather forecast
-  temperature guessing game-users can guess the temperature of the next day
-  buttons with animations-home button, weather forecast and temperature buttons play animations on hover
-  validation of temperature guessing game: users have to enter a number between 18 and 40, an error message will be shown if not within range

Features left to implement:
- player level
- achievements
- rewards system
- more in-game characters and mini games


Technologies used:
- HTML: to create the webpages
- CSS: to style the webpages
- CSS framework used: Bootstrap 
- Javascript: to add events and user interactivity to the webpages
- Jquery to simplify DOM manipulation
  

Testing
- W3C markup validator: 
  https://validator.w3.org/
- CSS validator
  https://jigsaw.w3.org/css-validator/.
- Javascript validator:
  https://codebeautify.org/jsvalidate
- Game input validation testing:
  1. Enter a number below 18
  2. check if error message is shown
  3. enter a number above 40
  4. check if error message is shown

- Weather forecast testing:
  1. click on one of the weather option
  2. check if feedback matches guess(whether user guessed the same as the weather forecast)
  3. check if weather forecast is displayed along with the weather animation

github link:  https://hl2703.github.io/IDAssignment3/
github repo link: https://github.com/hl2703/IDAssignment3

Credits:
Content
API used:
https://api.data.gov.sg/v1/environment/4-day-weather-forecast
https://api.data.gov.sg/v1/environment/24-hour-weather-forecast

Bootstrap functions: 
https://getbootstrap.com/docs/4.5/components/alerts/
https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp

buttons:
https://getbootstrap.com/docs/4.0/components/buttons/
font:
https://fonts.google.com/

text outline:https://stackoverflow.com/questions/4919076/outline-effect-to-text
CSS background image: https://www.w3schools.com/cssref/pr_background-image.asp

Media
icons from: https://freeicons.io/
characters from :https://chriiscrossing.tumblr.com/post/139062353525/villager-spritespixels
background from:https://www.pinterest.com/pin/632192866419220034/
heading: https://cooltext.com/Render-Image?RenderID=376274933475715&LogoId=3762749334
animations from: https://lottiefiles.com/
gradient colours: https://www.grabient.com/

Acknowledgements:
I received inspiration from role-playing games like animal crossing and maple story


Done by: Hannah Loh P01 (S10186258)