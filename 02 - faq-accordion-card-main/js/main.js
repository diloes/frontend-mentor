document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

let preguntaUna;

function iniciarApp(){

    //Seleccionamos las preguntas
    const pregunta = document.querySelectorAll('.colocar-flecha');
    pregunta.forEach(element => {
        preguntaUna = element;
}
