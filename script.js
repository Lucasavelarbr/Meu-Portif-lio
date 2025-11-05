const toggleMenu = document.getElementById("toggle-menu")
const menu = document.querySelector(".menu-lateral")

toggleMenu.addEventListener("click", () =>{
    menu.classList.toggle("open");
});