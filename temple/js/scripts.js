function toggleMenu() {
    document.getElementsByClassName("btn").classList.toggle("click");
    document.getElementsByClassName("sidebar").classList.toggle("show");
}
const x = document.getElementsByClassName("btn");
x.onclick = toggleMenu;

function toggleMenuTwo() {
    document.getElementsByClassName("nav ul .serv-show").classList.toggle("show");
    document.getElementsByClassName("nav ul .second").classList.toggle("rotate");
}
const y = document.getElementsByClassName("serv-btn");
y.onclick = toggleMenuTwo;






//transcribe from jquery to normal javascript
$(".btn").click(function () {
    $(this).toggleClass("click");
    $(".sidebar").toggleClass("show");
  });

  $(".serv-btn").click(function () {
    $("nav ul .serv-show").toggleClass("show1");
    $("nav ul .second").toggleClass("rotate");
  });

  $("nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });