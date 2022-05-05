const today = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const dayOfWeek = weekday[today.getDay()];

//format: "Tuesday, 2 May 2022"
document.getElementById('last-updated-time').innerHTML = `${dayOfWeek}, ${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`;

document.getElementById('current-year').innerHTML = new Date().getFullYear();

if(dayOfWeek==="Friday"){
    document.getElementById('onFriday').classList.add('show');
}

const toggleMenu = () => {
    document.getElementById('nav-ul').classList.toggle('responsive');
}

const makeCurrentNavActive = () => {
    const tempURL = window.location.href.split('/');
    const lastURLSection = tempURL[tempURL.length-1];
    const navName = lastURLSection.substring(0, lastURLSection.indexOf('.html'));

    document.getElementById(navName).classList.add('active');
}

makeCurrentNavActive();