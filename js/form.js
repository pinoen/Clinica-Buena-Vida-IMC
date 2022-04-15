let agregarPaciente = document.querySelector('#adicionar-paciente');

agregarPaciente.addEventListener('click', function(e){
  e.preventDefault();

  let form = document.querySelector('#form-adicionar');

  let nombre = form.nombre.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  let tabla = document.querySelector('#tabla-pacientes'); 

  let pacienteTr = document.createElement('tr');
  let nombreTd = document.createElement('td');
  let pesoTd = document.createElement('td');
  let alturaTd = document.createElement('td');
  let gorduraTd = document.createElement('td');
  let imcTd = document.createElement('td');

  nombreTd.textContent = nombre;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calcularImc(peso, altura);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);
})