
const toggleMenu = document.getElementById("toggle-menu")
const menu = document.querySelector(".menu-lateral")

toggleMenu.addEventListener("click", () =>{
    
    menu.classList.toggle("open");
});

// Fecha o menu ao clicar fora 

document.addEventListener("click", (e) => {
    const ClicksideMenu = menu.contains(e.target)
    const ClickButton = toggleMenu.contains(e.target)

    if (!ClicksideMenu && !ClickButton) {
        menu.classList.remove("open")
    } 
})

document.addEventListener("keydown", (e) =>{
    if (e.key === "Escape"){
        menu.classList.remove("open")
    } 
})

document.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click", () =>{
        menu.classList.remove("open")
    })
})

