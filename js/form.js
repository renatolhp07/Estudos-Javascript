var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Obtem informações do form
    var paciente = obtemPacienteDoFormulario(form);

    //Cria os elementos html que serão incluídos no form

    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    //Créditos a Bruno Akihiro que me ajudou a corrigir essa parte do código
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura);

    //Coloca todos os elementos td como filhos do elemento pacienteTr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');

    //Coloca o pacienteTr como elemento filho da tabela
    tabela.appendChild(pacienteTr);

});

function obtemPacienteDoFormulario(form) {

   //Cria o objeto paciente
   var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
return paciente;
}