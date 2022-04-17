let botonBuscar = document.querySelector('#buscar-paciente');

botonBuscar.addEventListener('click', ()=>{
  let xhr = new XMLHttpRequest;
  xhr.open('GET', 'https://alura-es-cursos.github.io/api-pacientes/pacientes.json');
  xhr.addEventListener('load', ()=>{
    let errorAjax = document.querySelector('#error-ajax');
    if(xhr.status === 200){
      errorAjax.classList.add('invisible');
      let respuesta = xhr.responseText;
      let pacientes = JSON.parse(respuesta);
      pacientes.forEach(item => {
      agregarPacienteTabla(item);
      });
    } else {
      errorAjax.classList.remove('invisible');
      console.log(xhr.status);
    }
  });
  xhr.send();
});