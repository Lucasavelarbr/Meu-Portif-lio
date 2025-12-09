
const toggleMenu = document.getElementById("toggle-menu")
const menu = document.getElementById("menu-lateral")

toggleMenu.addEventListener("click", () =>{
    
    menu.classList.toggle("open");
});

// Fecha o menu ao clicar fora 

document.addEventListener("click", (e) => {
    const ClickFora = menu.contains(e.target)
    const ClickBotao = toggleMenu.contains(e.target)

    if (!ClickFora && !ClickBotao) {
        menu.classList.remove("open")
    } 
})

// Fecha ao apertar Espaço ou Esc

document.addEventListener("keydown", (e) =>{
    if (e.key === "Escape" || e.key === "Space"){
        menu.classList.remove("open")
    } 
})

// Fecha ao clicar em um link do menu
document.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click", () =>{
        menu.classList.remove("open")
    })
})

