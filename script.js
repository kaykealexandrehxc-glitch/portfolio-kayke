const botao = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu-mobile");
const links = menu.querySelectorAll("a");

function fecharMenu(){
    menu.classList.remove("ativo");
        botao.textContent ="☰";
        botao.setAttribute("aria-expanded", "false");
}
botao.addEventListener("click", () =>{
    menu.classList.toggle("ativo");
    
    if(menu.classList.contains("ativo")){
        botao.textContent ="✕";
        botao.setAttribute("aria-expanded", "true");
    }else{
        botao.textContent ="☰";
        botao.setAttribute("aria-expanded", "false")
    }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    fecharMenu();
  });
});

document.addEventListener("keydown", (event) =>{
    if(event.key === "Escape") {
        if(menu.classList.contains("ativo")){
            fecharMenu()
        }
    }
})