
let pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

//IMC = peso / (altura*altura)

for(let i=0; i<pacientes.length; i++){

  let tdPeso = pacientes[i].querySelector('.info-peso');
  let peso = tdPeso.textContent;

  let tdAltura = pacientes[i].querySelector('.info-altura');
  let altura = tdAltura.textContent;

  let tdImc = pacientes[i].querySelector('.info-imc');

  let pesoValido = validarPeso(peso);
  let alturaValida = validarAltura(altura);

  if(!pesoValido){
    pesoValido = false;
    tdImc.textContent = 'Peso invalido!';
    pacientes[i].classList.add('paciente-invalido');
  }
  if(!alturaValida){
    alturaValida = false;
    tdImc.textContent = 'Altura invalida!';
    pacientes[i].classList.add('paciente-invalido');
  }

  if(pesoValido && alturaValida){
    tdImc.textContent = calcularImc(peso, altura);
  }
}

function calcularImc(peso, altura){
  let imc = peso / (altura*altura);
  return imc.toFixed(2); 
}

function validarPeso(peso){
  if(peso >= 0 && peso < 500){
    return true;
  }
  return false;
}

function validarAltura(altura){
  if(altura >= 0 && altura < 3){
    return true;
  }
  return false;
}


