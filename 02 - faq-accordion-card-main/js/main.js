document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

let preguntaUna;

function iniciarApp(){

    const preguntas = document.querySelectorAll('.colocar-flecha');
    const respuestas = document.querySelectorAll('.respuesta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function(){

            pregunta.parentNode.childNodes[3].classList.remove('ocultar')
            console.log(pregunta.parentNode.childNodes);
            
        });
    });

    /*
function resp(){
    respuestas.forEach(respuesta => {
        if(respuesta.classList.value === 'respuesta'){
            console.log('este es el if')
            respuesta.classList.add('.ocultar');
        }else {
            console.log('este es el else')
            respuesta.classList.remove('.ocultar')
        }
        
    });
}*/

/*
    for(let i=0; i < pregunta.length; i++){
        //console.log(respuesta[i].classList.value)
        pregunta[i].addEventListener('click', function(){

            respuesta[i].classList.remove('ocultar');

            // if(respuesta[i].classList.value !== 'respuesta ocultar'){
            //     respuesta[i].classList.add('ocultar');
            // }

        });
    }*/

    
}



