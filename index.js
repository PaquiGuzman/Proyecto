// Aquí empieza la parte de la cabecera. Este es el menú hamburguesa del nav. Cuando el menú se mantenga cerrado, aparecerá el icono de las
// barras, y cuando se abra saldrá el icono de la x. He usado la propiedad toggle en la clase "cabecera__lista--aparece", estilada en css,
// para que la lista aparezca y desaparezca cuando se clique el botón. He repetido el mismo proceso con el submenú del apartado Tienda. 

function apareceMenu(){

    let lista = document.querySelector('.cabecera__lista');

    lista.classList.toggle('cabecera__lista--aparece');

    let icono = document.getElementById('iconoBoton');

    if (icono.className == "fa-solid fa-bars"){

        icono.className = "fa-solid fa-x";
        
    }else{

        icono.className = "fa-solid fa-bars";
    } 
     
}

function apareceSubMenu(){
    let lista = document.querySelector('.for_mobile .cabecera__lista__submenu');

    lista.classList.toggle('cabecera__lista--aparece');
     
}

// Aquí comienza el main, con una sección con un slide show. 

let diapositivaIndex= 1;

muestraDiapositiva(diapositivaIndex);

function muestraDiapositiva(numero) {
    let diapositivas = document.getElementsByClassName('slideshowContainer__diapositiva');
    if(diapositivas.length != 0) {
        let puntos = document.getElementsByClassName('puntos__punto');
        if (numero > diapositivas.length) {
            diapositivaIndex = 1;
        }
        if (numero < 1) {
            diapositivaIndex = diapositivas.length;
        }

        for (let i = 0; i < diapositivas.length; i++) {
            diapositivas[i].style.display = "none";
        }

        for (let i = 0; i < puntos.length; i++) {

        puntos[i].classList.remove('activo');
            
        }

        diapositivas[diapositivaIndex-1].style.display = "block";
        puntos[diapositivaIndex-1].classList.add('activo');
    }
    
}

function agregarEventos() {
    //Abrir menú de la cabecera
    let boton = document.getElementById('abreCabecera');
    boton.addEventListener('click', apareceMenu);

    //Abrir submenú de la cabecera
    let botonSubMenu = document.getElementById('botonMovil__tienda');
    botonSubMenu.addEventListener('click', apareceSubMenu);

    //Botones slideshow
    let siguiente = document.getElementById('botonSiguiente');
    let previo = document.getElementById('botonAtras');
    if (siguiente != null && previo != null) {
        siguiente.addEventListener('click',siguienteDiapositiva);
        previo.addEventListener('click',anteriorDiapositiva);

        let puntos = document.getElementsByClassName('puntos__punto');

        for (let i = 0; i < puntos.length; i++) {
            
            puntos[i].addEventListener('click',saltaDiapositiva);
            
        }
    }
}

function saltaDiapositiva(e) {
    let numero = parseInt(e.target.innerText);
    diapositivaIndex = numero;
    muestraDiapositiva(diapositivaIndex);
}

function siguienteDiapositiva() {
    diapositivaIndex = diapositivaIndex + 1;
    muestraDiapositiva(diapositivaIndex);
}

function anteriorDiapositiva() {
    diapositivaIndex = diapositivaIndex - 1;
    muestraDiapositiva(diapositivaIndex);
}

setInterval(siguienteDiapositiva,3000);

window.onload = agregarEventos;


// Esto es una barra de progreso. 
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}




