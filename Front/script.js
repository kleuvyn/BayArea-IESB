function toggleMenu() {
    var menuOptions = document.getElementById("menu-options");
    menuOptions.classList.toggle("show-options");
}

function toggleOpcoesCadastro() {
    var menuOptions = document.getElementById("cadastro-options");
    menuOptions.classList.toggle("opcoes-cadastro_exibir");
}
function toggleOpcoesVendas() {
    var menuOptions = document.getElementById("vendas-options");
    menuOptions.classList.toggle("elemento-escondido");
}
function toggleOpcoesMenuGerencial() {
    var menuOptions = document.getElementById("menuGrerencial-options");
    menuOptions.classList.toggle("opcoes-menuGrerencial_exibir");
}
function toggleOpcoesMenuFiscal() {
    var menuOptions = document.getElementById("menuFiscal-options");
    menuOptions.classList.toggle("opcoes-menuFiscal_exibir");
}
function toggleOpcoesEstoque() {
    var menuOptions = document.getElementById("estoque-options");
    menuOptions.classList.toggle("opcoes-estoque_exibir");
}
function toggleOpcoesFinanceiro() {
    var menuOptions = document.getElementById("financeiro-options");
    menuOptions.classList.toggle("opcoes-financeiro_exibir");
}

function selecionarOpcao(opcao) {
    document.getElementById("sim").classList.remove("selecionado");
    document.getElementById("nao").classList.remove("selecionado");
    document.getElementById(opcao).classList.add("selecionado");
    document.getElementById("opcao").value = opcao;
}

function selecionarGenero(genero) {
    document.getElementById("masculino").classList.remove("selecionado");
    document.getElementById("feminino").classList.remove("selecionado");
    document.getElementById("outro").classList.remove("selecionado");
    document.getElementById(genero).classList.add("selecionado");
    document.getElementById("genero").value = genero;
}

// Adicionar funcionalidade para mostrar/ocultar o submenu
document.querySelector('li:has(ul)').addEventListener('click', function() {
    var submenu = this.querySelector('.submenu');
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
});
