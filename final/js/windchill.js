const apiKey = 'ad971ed827569efa86a502d028b44a9f&units=imperial';


const tem = window.location.href.split('/');
const tem2 = tem[tem.length-1];
const htmlfile = tem2.substring(0, tem2.indexOf('.html'));

var lat = 20.4230;
var lon = -86.9223;
const utcDif = -6;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const populateCurrentForecast = async () => {
    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`).catch(err => {console.log(err)});
    var data = await data.json().catch(err => {console.log(err)});

    //format the currently weather data
    document.getElementById('currently').innerHTML = `${Math.round(data.main.temp)}°F ${data.weather[0].main}`;
    document.getElementById('humidity').innerHTML = `${data.main.humidity}%`;
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
}

main();