const lastmod = document.querySelector('#lastmod')
lastmod.innerHTML = `<strong>Last Updated:</strong> ${document.lastModified}`;


let d = new Date();
let fullYear = d.getFullYear();
document.getElementById("thisyear").textContent = fullYear;


const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const monthName = months[d.getMonth()]
const dayName = days[d.getDay()]
const date = d.getDate()
const year = d.getFullYear()
const currDate = `${dayName}, ${date} ${monthName} ${year}`
document.getElementById("currentTime").textContent = currDate;


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

function showBanner() {
    document.getElementById("banner").classList.toggle("open");
}
if (dayName == ('Mon' || 'Tue')) {
    showBanner;
}

/**
 * local storage stuff
 */
// initialize display element
const lastvisit_text = window.localStorage.getItem('lastvisit');
if(lastvisit_text === undefined) {
    lastvisit_text = new Date(Data.now());
}
const lastvisit = Date.parse(lastvisit_text);
const FACTOR = 1000 * 60 * 60 * 24;


let daysbetween = Date.now() - lastvisit;
let numberOfDays = daysbetween / FACTOR;

window.localStorage.setItem('lastvisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
document.getElementById('lastvisit').textContent = daysSinceVisit;