let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionBotonReiniciar = document.getElementById("reiniciar")
let mascotases = document.getElementById("mascotases")

  
let opcionDeMokepones 
   

let ataqueJuagador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3

    

let mokepones = []

class Mokepon {
    
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto 
        this.vida = vida
        this.ataques = []
    }
}



let GatoMarciano = new Mokepon('GatoMarciano', './assets/marcianillo.png',5 )

let cuche = new Mokepon('Cuche','./assets/cochino.png', 5 )

let Mapache = new Mokepon('Mapache','./assets/mapache.png', 5 )

//mokepones.push(GatoMarciano, cuche, Mapache)

//console.log(GatoMarciano, cuche, Mapache)
GatoMarciano.ataques.push(
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '💦', id: 'boton-agua' },
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🪾', id: 'boton-tierra' },
)

Mapache.ataques.push(
    { nombre: '🪾', id: 'boton-tierra' },
    { nombre: '🪾', id: 'boton-tierra' },
    { nombre: '🪾', id: 'boton-tierra' },
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    
)
cuche.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💦', id: 'boton-agua'},
    { nombre: '🪾', id: 'boton-tierra' },
)

//console.log(GatoMarciano.ataques)

//mokepones.forEach ((mokepon) => {
   // console.log(mokepon.nombre)
//})

//console.log(GatoMarciano)

//console.log(mokepones)


mokepones.push(GatoMarciano,cuche,Mapache)

function iniciarJuego() {

mokepones.forEach((mokepon) => {
    
  opcionDeMokepones = `
  <input Type ="radio" name="mascota" id = ${mokepon.nombre} />   
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre} > 
        <p> ${mokepon.nombre} </p>
        <img src = ${mokepon.foto} alt = ${mokepon.nombre}>
    </label>
    `
   mascotases.innerHTML += opcionDeMokepones
})


 
    sectionSeleccionarAtaque.style.display = 'none'


 let caballitos = [] 

 

 let botonsote = document.getElementById("botoncillo")
 
let cajasauria = document.getElementById("cajita")

botonsote.addEventListener('click',cargardatoalista)



function cargardatoalista () {

    
caballitos.push(cajasauria.value)
  console.log(caballitos)
 alert("ignora esta opcion y lo de cargar datos es solo una funcion de prueba solo selecciona la mascota y picale abajo en seleccionar")
}


    sectionSeleccionarAtaque.style.display = 'none'



    
    
        
sectionSeleccionarAtaque.style.display = 'none'

sectionBotonReiniciar.style.display = "none"

    

     

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

    


   
    sectionSeleccionarAtaque.style.display = 'none'

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

    sectionSeleccionarMascota.style.display = "none"

        sectionSeleccionarAtaque.style.display = 'block'


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


    sectionBotonReiniciar.style.display = 'block'

 }


 function reiniciarJuego() {

    location.reload()

 }


   

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

window.load = function () {
    document.querySelectorAll('input[name="mascota"]')
        .forEach(radio => radio.checked = false)
}
