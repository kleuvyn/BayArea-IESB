function toggleMenu() {
    var menuOptions = document.getElementById("menu-options");
    menuOptions.classList.toggle("show-options");
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
