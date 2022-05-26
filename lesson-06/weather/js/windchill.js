const apiKey = 'ad971ed827569efa86a502d028b44a9f&units=imperial';


const tem = window.location.href.split('/');
const tem2 = tem[tem.length-1];
const htmlfile = tem2.substring(0, tem2.indexOf('.html'));

var lat = 42.0963;
var lon = -111.8766;
if(htmlfile==='sodasprings'){
    lat = 42.654;
    lon = -111.605;
} else if(htmlfile==='fishhaven'){
    lat = 42.0372;
    lon = -111.3960;
}
const utcDif = -6;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



const setWindChill = () => {
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
};

const populateCurrentForecast = async () => {
    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).catch(err => {console.log(err)});
    var data = await data.json().catch(err => {console.log(err)});

    //format the currently weather data
    document.getElementById('currently').innerHTML = `${Math.round(data.main.temp)}°F ${data.weather[0].main}`;
    document.getElementById('high').innerHTML = `${Math.round(data.main.temp_max)}°F`;
    document.getElementById('humidity').innerHTML = `${data.main.humidity}%`;
    document.getElementById('wind-speed').innerHTML = `${Math.round(data.wind.speed)} mph`;
};

const populateFiveDayForecast = async () => {
    var data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`).catch(err => {console.log(err)});
    var data = await data.json().catch(err => {console.log(err)});

    //populate the next day if time is 18:00
    var currentDay = 1;
    data.list.forEach((data) => {
        if(parseInt(data.dt_txt.substring(11, 13))===18+utcDif && currentDay<=5){
            const parentId = `forecast${currentDay}`;

            //set the day text
            const day = new Date(data.dt * 1000);
            document.querySelector(`#${parentId} .day`).innerHTML = `${days[day.getDay()]}.`;

            //set the image
            var imageElement = document.querySelector(`#${parentId} img`);
            const imagesrc = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
            imageElement.src = imagesrc;
            imageElement.alt = data.weather[0].description;

            //set the temprature 
            document.querySelector(`#${parentId} .temp`).innerHTML = `${Math.round(data.main.temp)}°F`;

            currentDay++;
        }
    })
};

const main = async() => {
    populateFiveDayForecast();
    await populateCurrentForecast();
    setWindChill();
}

main();