let ataqueJuagador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3





function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionBotonReiniciar = document.getElementById("reiniciar")
    sectionBotonReiniciar.style.display = 'none'

     

let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)
let botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener('click', reiniciarJuego)


}
function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = 'none'


    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = 'block'
let imputHipodogue = document.getElementById('GatoMarciano') //  con esto puedo poner codigo aqui y no meterlo al condicional del if para en el if tener la logica basica 
let imputCapipepo = document.getElementById('Cuche')
let imputRatigueya = document.getElementById('Mapache')
let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (imputHipodogue.checked) {
    
    spanMascotaJugador.innerHTML = 'GatoMarciano'

} else if (imputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Cuche'
    
} else if (imputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Mapache'
} else {
    alert('Selecciona una mascota')

}


seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {

    let mascotaAleatoria = aleatorio(1,3) 
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    

    if (mascotaAleatoria == 1) {
        //hipodogue
        spanMascotaEnemigo.innerHTML = 'GatoMarciano' 
    } else if (mascotaAleatoria == 2) {
        //capipepo
        spanMascotaEnemigo.innerHTML = 'Cuche'

    } else if (mascotaAleatoria == 3) {
        //ratigueya
        spanMascotaEnemigo.innerHTML = 'Mapache'
    }   else {
        alert('No se selecciono ninguna mascota')
    }

     
}


function ataqueFuego() {
    ataqueJuagador = 'FUEGO'
    ataqueAleatorioEnemigo ()
}
function ataqueAgua() {
    ataqueJuagador = 'AGUA'
    ataqueAleatorioEnemigo ()
}
function ataqueTierra() {
    ataqueJuagador = 'TIERRA'
    ataqueAleatorioEnemigo ()
}

function ataqueAleatorioEnemigo () {


    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio==1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio==2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }


    combate()
}

 function combate() {

        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")


        if (ataqueJuagador == ataqueEnemigo) {
            crearMensaje('EMPATE')
        } else if (ataqueJuagador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
            crearMensaje('GANASTE')
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJuagador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
            crearMensaje('GANASTE')
             vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else if (ataqueJuagador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
            crearMensaje('GANASTE')
             vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            crearMensaje('PERDISTE') 
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }


        if (vidasJugador== 0) {
            crearMensajeFinal("HAS PERDIDOOOO!!!!")
           
        } else if (vidasEnemigo == 0) {
            crearMensajeFinal("FELICITACIONES GANASTE!!!!")
        }

    }   


 function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJuagador + ', La mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado + ' en esta partida'
    sectionMensajes.appendChild(parrafo)

 }



 function crearMensajeFinal(resultadoFina) {
    let sectionMensajes = document.getElementById('mensajef')


    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFina
    sectionMensajes.appendChild(parrafo)


    let botonFuego = document.getElementById('boton-fuego')
botonFuego.disabled = true
let botonAgua = document.getElementById('boton-agua')
botonAgua.disabled = true
let botonTierra = document.getElementById('boton-tierra')
botonTierra.disabled = true

let sectionBotonReiniciar = document.getElementById("reiniciar")
    sectionBotonReiniciar.style.display = 'block'

 }


 function reiniciarJuego() {

    location.reload()

 }


   

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

window.onload = function () {
    document.querySelectorAll('input[name="mascota"]')
        .forEach(radio => radio.checked = false);
};
