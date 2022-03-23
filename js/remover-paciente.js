var tabelaAlvo = document.querySelector("#tabela-pacientes");

tabelaAlvo.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove()
    },500);

});
