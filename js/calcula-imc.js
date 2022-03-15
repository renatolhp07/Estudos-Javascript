var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(i = 0; i < pacientes.length; i++){
    
    console.log(pacientes[i]);
    var paciente = pacientes[i];
  
    var tdNome = paciente.querySelector('.info-nome');
    var nome = tdNome.textContent;

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector('.info-gordura');
    var gordura = tdGordura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');

    var alturaEhValida= validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido){
        console.log("Peso inválido");
        pesoEhValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida){
        console.log('Altura inválida');
        validaAltura = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >=0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura>=0 && altura < 3.00){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
