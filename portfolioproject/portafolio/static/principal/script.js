let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



/* Jquery de contacto */
$(document).ready(function() {
    $('#formulario-contacto').submit(function(event) {
        // Validar los campos del formulario
        if ($('#nombre').val().trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            return false; // Evitar el envío del formulario
        }

        if ($('#email').val().trim() === '') {
            alert('Por favor, ingresa tu correo electrónico.');
            return false; // Evitar el envío del formulario
        }

        if ($('#asunto').val().trim() === '') {
            alert('Por favor, ingresa el asunto.');
            return false; // Evitar el envío del formulario
        }

        if ($('#mensaje').val().trim() === '') {
            alert('Por favor, ingresa un mensaje.');
            return false; // Evitar el envío del formulario
        }

        
        return true;
    });


    
});


document.addEventListener('DOMContentLoaded', function () {
    const modalCV = new bootstrap.Modal(document.getElementById('modalCV'));
  });