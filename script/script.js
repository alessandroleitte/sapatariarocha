const botaoMenu = document.getElementById("botao-menu"); // Exemplo
const menu = document.getElementById("menu-mobile-itens"); //
const btnTopo = document.getElementById('btn-topo');
const btnWpp = document.getElementById('btn-wpp');
const scrollThreshold = 300;

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        btnTopo.style.display = 'flex'; 
        btnWpp.style.display = 'flex';
    } else {
        btnTopo.style.display = 'none';
        btnWpp.style.display = 'none';
    }
});
