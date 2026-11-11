const botao = document.querySelector("#Menu-toggle");
const menu = document.querySelector("#Menu-mobile");
const links = menu.querySelectorAll("a");

window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

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