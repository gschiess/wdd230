const lastmod = document.querySelector('#lastmod')
lastmod.textContent = `Last Updated: ${document.lastModified}`;

let d = new Date();
let fullyear = d.getFullYear();
document.getElementById("thisyear").textContent = fullyear;