const sideToggle = document.querySelector(".side-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

sideToggle.addEventListener("click", function() {
    sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function() {
    sideBar.classList.remove("show-sidebar");
});