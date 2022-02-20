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
// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".numVisits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// check time between last visit
