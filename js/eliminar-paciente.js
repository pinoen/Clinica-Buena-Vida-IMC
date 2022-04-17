let pacientesAll = document.querySelectorAll('.paciente');

let tabla = document.querySelector('#tabla-pacientes');

tabla.addEventListener('dblclick', (e) => {
  e.target.parentNode.classList.add('fadeOut');
  
  setTimeout(()=>{
    e.target.parentNode.remove();
  }, 500);
})

//De esta manera no es posible borrar un paciente recientemente agregado(o sea solo borrara pacientes nativos del html):
// pacientesAll.forEach(paciente => {
//   paciente.addEventListener('dblclick', function() {
//     this.remove();
//   });
// });