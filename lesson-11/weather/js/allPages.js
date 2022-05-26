//Date stuff
const today = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayOfWeek = weekday[today.getDay()];

//What page is it on?
const tempURL = window.location.href.split('/');
const lastURLSection = tempURL[tempURL.length-1];
const navName = lastURLSection.substring(0, lastURLSection.indexOf('.html'));

//Format the Footer's Date
document.getElementById('last-updated-time').innerHTML = `${dayOfWeek}, ${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()}`;
document.getElementById('current-year').innerHTML = new Date().getFullYear();

//format Navbar area
if(navName==='preston' && dayOfWeek==="Friday"){
    document.getElementById('onFriday').classList.add('show');
}

//NavBar Stuff:
const toggleMenu = () => {
    document.getElementById('nav-ul').classList.toggle('responsive');
}
const makeCurrentNavActive = () => {
    document.getElementById(navName).classList.add('active');
}
makeCurrentNavActive();