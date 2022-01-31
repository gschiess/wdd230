const lastmod = document.querySelector('#lastmod')
lastmod.innerHTML = `<strong>Last Updated:</strong> ${document.lastModified}`;

let d = new Date();
let fullYear = d.getFullYear();
document.getElementById("thisyear").textContent = fullYear;
