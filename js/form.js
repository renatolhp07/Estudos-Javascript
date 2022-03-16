var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //Obtem informações do form
    var paciente = obtemPacienteDoFormulario(form);

    //Cria os elementos html que serão incluídos no form
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector('#tabela-pacientes');

    //Coloca o pacienteTr como elemento filho da tabela
    tabela.appendChild(pacienteTr);

    //limpa o formulário após inserir o paciente
    form.reset();

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

function montaTr(paciente){
    
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    var nomeTd = document.createElement('td');
    nomeTd.classList.add('info-nome');
    var pesoTd = document.createElement('td');
    pesoTd.classList.add('info-peso');
    var alturaTd = document.createElement('td');
    alturaTd.classList.add('info-altura');
    var gorduraTd = document.createElement('td');
    gorduraTd.classList.add('info-gordura');
    var imcTd = document.createElement('td');
    imcTd.classList.add('info-imc');

    //Créditos a Bruno Akihiro que me ajudou a corrigir essa parte do código
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    
    //Coloca todos os elementos td como filhos do elemento pacienteTr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function validaPaciente(paciente){
    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser vazio!");
    }
    
    if(paciente.nome = ""){
        erros.push("Nome não pode ser vazio!");
    }
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!")
    }

    if(paciente.gordura.length == 0){
        erros.push("Campo gordura não pode ser vazio!");
    }

    if(paciente.peso.length == 0){
        erros.push("Campo peso não pode ser vazio!");
    }

    if(paciente.altura.length == 0){
        erros.push("Campo altura não pode ser vazio!");
    }


    return erros;
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}