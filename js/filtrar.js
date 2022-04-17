let campoFiltro = document.querySelector('#filtrar-tabla');

campoFiltro.addEventListener('input', function(){
  console.log(this.value);
  let pacientes = document.querySelectorAll('.paciente');

  if(this.value.length > 0){
    for (let i = 0; i < pacientes.length; i++) {
      let tdNombre = pacientes[i].querySelector('.info-nombre');
      let nombre = tdNombre.textContent;
      let expresion = new RegExp(this.value, 'i');

      if(!expresion.test(nombre)) {
        pacientes[i].classList.add('invisible');
      } else {
        pacientes[i].classList.remove('invisible');
      }
    } 
  } else {
    for (let i = 0; i < pacientes.length; i++){
      pacientes[i].classList.remove('invisible');
    }
  }
})