// Script for Navigation Button functionality
function toggleMenu() {
  document.getElementById("primary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn").classList.toggle("open");
};
let btnOne = document.getElementById('hamburger-btn');
btnOne.onclick = toggleMenu;

function toggleMenuTwo() {
  document.getElementById("secondary-nav").classList.toggle("open");
  document.getElementById("hamburger-btn-two").classList.toggle("open");
};
let btnTwo = document.getElementById('hamburger-btn-two');
btnTwo.onclick = toggleMenuTwo;


// Script for Footer and Date stuff
const lastmod = document.querySelector('#last-mod')
lastmod.innerHTML = `<strong>Last Updated:</strong> ${document.lastModified}`;

let d = new Date();
let fullyear = d.getFullYear();
document.getElementById("this-year").textContent = fullyear;