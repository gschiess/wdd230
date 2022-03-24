function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn-1").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn-1');
x.onclick = toggleMenu;

function toggleMenuTwo() {
    document.getElementById("secondaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn-2").classList.toggle("open");
}
const y = document.getElementById('hamburgerBtn-2');
y.onclick = toggleMenuTwo;