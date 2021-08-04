const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(100%)";
});
