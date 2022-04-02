function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

function toggleMenuTwo() {
  document.getElementById("secondaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtnTwo").classList.toggle("open");
}
const y = document.getElementById('hamburgerBtnTwo');
y.onclick = toggleMenuTwo;