
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionBotonReiniciar = document.getElementById("reiniciar")
let mascotases = document.getElementById("mascotases")




let sectionVerMapa = document.getElementById("ver-mapa")
let mapa = document.getElementById("mapa")

let BotonMoverDerecha = document.getElementById("mover-Derecha")
let BotonMoverIzquierda = document.getElementById("mover-Izquierda")
let BotonMoverArriba = document.getElementById("mover-Arriba")
let BotonMoverAbajo = document.getElementById("mover-Abajo")

let opcionDeMokepones 
   

let ataqueJuagador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3

let intervalo

let mapaBackground = new Image()
mapaBackground.src = './assets/plaza.jpg'


let mokepones = []

class Mokepon {
    
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto 
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 20
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.VelocidadY = 0
        this.VelocidadX = 0
        
    }
}



let GatoMarciano = new Mokepon('GatoMarciano', './assets/marcianillo.png',5 )

let cuche = new Mokepon('Cuche','./assets/cochino.png', 5 )

let Mapache = new Mokepon('Mapache','./assets/mapache.png', 5 )

let lienzo = mapa.getContext("2d")



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
  
  
  
    sectionVerMapa.style.display = 'none' //la acabo de agregar


 let caballitos = [] 

 

 let botonsote = document.getElementById("botoncillo")
 
let cajasauria = document.getElementById("cajita")

botonsote.addEventListener('click',cargardatoalista)



function cargardatoalista () {

    
caballitos.push(cajasauria.value)
  console.log(caballitos)
 alert("ignora esta opcion y lo de cargar datos es solo una funcion de prueba solo selecciona la mascota y picale abajo en seleccionar")
}





    
    
        
//sectionSeleccionarAtaque.style.display = 'none'

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


    sectionSeleccionarMascota.style.display = "none"
    
    sectionVerMapa.style.display = 'flex'

    iniciarMapa()
    //lienzo.fillRect(20,10,100,100) 
pintarCanvas ()

     //la acabo de agregar

    sectionSeleccionarAtaque.style.display = "none" //le puse block

let imputHipodogue = document.getElementById('GatoMarciano') //  con esto puedo poner codigo aqui y no meterlo al condicional del if para en el if tener la logica basica 
let imputCapipepo = document.getElementById('Cuche')
let imputRatigueya = document.getElementById('Mapache')
let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (imputHipodogue.checked) {
    
    spanMascotaJugador.innerHTML = imputHipodogue.id
        

} else if (imputCapipepo.checked) {
    spanMascotaJugador.innerHTML = imputCapipepo.id
    
} else if (imputRatigueya.checked) {
    spanMascotaJugador.innerHTML = imputRatigueya.id
} else {
    alert('Selecciona una mascota')

}

   
seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo() {

    

    

    sectionSeleccionarAtaque.style.display = 'none' // aqui quite la seccion le puse none y estaba en block










    let mascotaAleatoria = aleatorio(0,mokepones.length - 1) 
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
   

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
//BotonMoverDerecha.addEventListener('click', moverGatoMarciano) anomalia rara

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


function pintarCanvas () {
    GatoMarciano.y = GatoMarciano.y + GatoMarciano.VelocidadY
    GatoMarciano.x = GatoMarciano.x + GatoMarciano.VelocidadX
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
    GatoMarciano.mapaFoto,
    GatoMarciano.x,
    GatoMarciano.y,
    GatoMarciano.ancho,
    GatoMarciano.alto
    )
 
}




function moverGatoDerecha () {

    GatoMarciano.VelocidadX = 5

// GatoMarciano.x = GatoMarciano.x + 5
pintarCanvas()

}


function moverGatoIzquierda () {

     GatoMarciano.VelocidadX = - 5
// GatoMarciano.x = GatoMarciano.x - 5
 pintarCanvas()
 


}
function moverGatoArriba () {

    GatoMarciano.VelocidadY = - 5
// GatoMarciano.x = GatoMarciano.x - 5
pintarCanvas()

}

function moverGatoAbajo () {

    GatoMarciano.VelocidadY = 5
pintarCanvas()

}

function detenerMovimiento () {

    GatoMarciano.VelocidadX = 0
    GatoMarciano.VelocidadY = 0

}

function sePresionoUnaTecla(event) {

switch (event.key) {
        case 'ArrowUp':
        moverGatoArriba()
        break;
        case 'ArrowDown':
        moverGatoAbajo()
        break;
        case 'ArrowRight':
        moverGatoDerecha()
        break;
        case 'ArrowLeft':
        moverGatoIzquierda()
        break;

    default:
 
    
    break;
    
}
    
//console.log(event.key);

}

function iniciarMapa() {

    mapa.width = 800
    mapa.height = 600 

    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)

    intervalo = setInterval(pintarCanvas, 50)

}



window.addEventListener('load', iniciarJuego)

window.load = function () {
    document.querySelectorAll('input[name="mascota"]')
        .forEach(radio => radio.checked = false)
}