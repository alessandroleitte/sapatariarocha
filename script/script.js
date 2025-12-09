const botaoMenu = document.getElementById("botao-menu"); // Exemplo
const menu = document.getElementById("menu-mobile-itens"); //

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

const btnTopo = document.getElementById('btn-topo');
const scrollThreshold = 300;

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        btnTopo.style.display = 'flex'; 
    } else {
        btnTopo.style.display = 'none';
    }
});

const btnWpp = document.getElementById('btn-wpp');

window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
        btnWpp.style.display = 'flex';
    } else {
        btnWpp.style.display = 'none';
    } 
});

