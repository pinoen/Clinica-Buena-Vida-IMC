let agregarPaciente = document.querySelector('#adicionar-paciente');

agregarPaciente.addEventListener('click', function(e){
  e.preventDefault();
  let form = document.querySelector('#form-adicionar');
  let paciente = tomarDatosPacientes(form);

  let errores = validarPaciente(paciente);
  if(errores.length > 0){
    mostrarErrores(errores);
    return;
  }

  agregarPacienteTabla(paciente);  

  form.reset();

  let mensajesErrores = document.querySelector('#mensaje-error');
  mensajesErrores.innerHTML = '';

})

function agregarPacienteTabla(paciente){
  let pacienteTr = creacionTr(paciente);
  let tabla = document.querySelector('#tabla-pacientes'); 
  tabla.appendChild(pacienteTr);
}

function tomarDatosPacientes(form){
   //Tomar los datos del formulario:
  let paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
  } 
  return paciente;
}

function creacionTr(paciente){
  //Creacion de 1 tr y 5 td:
  let pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  //Asignacion de los tr a el tr y del tr a la tabla:
  pacienteTr.appendChild(creacionTd(paciente.nombre, 'info-nombre'));
  pacienteTr.appendChild(creacionTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(creacionTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(creacionTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(creacionTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

function creacionTd(dato, clase){
  td = document.createElement('td');
  td.classList.add(clase);
  td.textContent = dato;

  return td;
}

function validarPaciente(paciente){
  let errores = [];
  if(paciente.nombre.length === 0){
    errores.push('Ingresar nombre!');
  }

  if(paciente.peso.length === 0){
    errores.push('Ingresar peso!');
  }

  if(paciente.altura.length === 0){
    errores.push('Ingresar altura!');
  }

  if(paciente.gordura.length === 0){
    errores.push('Ingresar gordura!');
  }

  if(!validarPeso(paciente.peso)){
    errores.push('El peso ingresado es incorrecto!');
  }
  if(!validarAltura(paciente.altura)){
    errores.push('La altura ingresada es incorrecta!');
  }
  return errores;
}

function mostrarErrores(errores){
  let ul = document.querySelector('#mensaje-error');

  errores.forEach(error => {
    let li = document.createElement('li');
    li.textContent = error;
    ul.appendChild(li);
  });
}