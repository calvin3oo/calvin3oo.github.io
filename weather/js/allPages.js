document.getElementById('last-updated-time').innerHTML = new Date().toDateString();

document.getElementById('current-year').innerHTML = new Date().getFullYear();

const toggleMenu = () => {
    document.getElementById('nav-ul').classList.toggle('responsive');
}