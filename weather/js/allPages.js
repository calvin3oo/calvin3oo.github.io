const today = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


//format: "Tuesday, 2 May 2022"
document.getElementById('last-updated-time').innerHTML = `${weekday[today.getDay()]}, ${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`;

document.getElementById('current-year').innerHTML = new Date().getFullYear();

const toggleMenu = () => {
    document.getElementById('nav-ul').classList.toggle('responsive');
}