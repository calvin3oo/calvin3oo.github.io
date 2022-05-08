//get current temprature
var currentTemp = document.getElementById('currently').innerHTML;
currentTemp = parseInt(currentTemp.substring(0, currentTemp.indexOf('°F')));

//get wind speed
var windSpeed = document.getElementById('wind-speed').innerHTML;
windSpeed = parseInt(windSpeed.substring(0, windSpeed.indexOf(' ')));

//checks to see if wind chill is applicable, and apply wind chill if so
if(currentTemp<=50 && windSpeed>3){
    const windChill = 35.74 + (.6215*currentTemp) - (35.75*(windSpeed**.16)) + (.4275*currentTemp*(windSpeed**.16));
    document.getElementById('wind-chill').innerHTML = `${Math.round(windChill)}°F`;
} else{
    document.getElementById('wind-chill').innerHTML = `N/A`;
}