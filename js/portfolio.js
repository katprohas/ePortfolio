document.getElementById("openMenu").addEventListener("click", function () {
    document.querySelector(".nav-top").classList.toggle("active");
    document.querySelector(".openMenu").classList.toggle("hide");
    document.querySelector(".closeMenu").classList.toggle("show");
});

// function showMenu() {
//     document.querySelector(".nav-top").classList.toggle("active");
//     document.querySelector(".openMenu").classList.toggle("hide");
//     document.querySelector(".closeMenu").classList.toggle("show");
// }