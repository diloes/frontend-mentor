document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

let preguntaUna;

function iniciarApp(){

    const pregunta = document.querySelectorAll('.colocar-flecha');
    const respuesta = document.querySelectorAll('.respuesta');
    
    for(let i=0; i < pregunta.length; i++){
        //console.log(respuesta[i].classList.value)
        pregunta[i].addEventListener('click', function(){

            respuesta[i].classList.remove('ocultar');

            // if(respuesta[i].classList.value !== 'respuesta ocultar'){
            //     respuesta[i].classList.add('ocultar');
            // }

        });
    }

    
}



