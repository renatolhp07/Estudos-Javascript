var tabelaAlvo = document.querySelector("#tabela-pacientes");

tabelaAlvo.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();
});
