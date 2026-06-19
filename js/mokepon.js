
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
let sectionBotonReiniciar = document.getElementById("reiniciar")
let mascotases = document.getElementById("mascotases")



let mascotaJugadorObjeto



let sectionVerMapa = document.getElementById("ver-mapa")
let mapa = document.getElementById("mapa")

let BotonMoverDerecha = document.getElementById("mover-Derecha")
let BotonMoverIzquierda = document.getElementById("mover-Izquierda")
let BotonMoverArriba = document.getElementById("mover-Arriba")
let BotonMoverAbajo = document.getElementById("mover-Abajo")

let opcionDeMokepones 
   

let ataqueJugador
let ataqueEnemigo

let jugadorId = null

let vidasJugador = 3
let vidasEnemigo = 3

let intervalo

let mapaBackground = new Image()
mapaBackground.src = './assets/plaza.jpg'


let mokepones = []

class Mokepon {
    
    constructor(nombre, foto, vida,fotoMapa, x = 10, y = 10, ancho = 80, alto = 80) {
        this.nombre = nombre
        this.foto = foto 
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.VelocidadY = 0
        this.VelocidadX = 0
        
    }

pintarMokepon() {

        lienzo.drawImage(
        this.mapaFoto,
        this.x,
        this.y,
        this.ancho,
        this.alto
    )

}


}



let GatoMarciano = new Mokepon('GatoMarciano', './assets/marcianillo.png',5, './assets/marcianilloVaquero.png',55, 450, 130, 130 )

let cuche = new Mokepon('Cuche','./assets/cochino.png', 5,'./assets/cochino.png' ,55, 450 )

let Mapache = new Mokepon('Mapache','./assets/mapache.png', 5,'./assets/mapacheVaquero.png' ,55, 450,130,130 )

let GatoMarcianoEnemigo = new Mokepon('GatoMarciano', './assets/marcianillo.png',5,'./assets/toroMalo1.png',600, 300, 130, 130 )

let cucheEnemigo = new Mokepon('Cuche','./assets/cochino.png', 5, './assets/toroMalo2.png', 700, 400, 130, 130)

let MapacheEnemigo = new Mokepon('Mapache','./assets/mapache.png', 5, './assets/toroMalo3.png', 600, 470, 130, 130)

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

unirseAlJuego() 
}

function unirseAlJuego() {

    fetch ("http://localhost:8080/unirse")
    .then(function (res) {
      
        if (res.ok) {

            res.text()
                .then(function(respuesta) {
                    console.log(respuesta)
                    jugadorId = (respuesta)

                })
        }

    })

}

function seleccionarMascotaJugador() {
    let mascotaSeleccionada = document.querySelector('input[name="mascota"]:checked')
    let spanMascotaJugador = document.getElementById('mascotaJugador')

    if (mascotaSeleccionada) {
        spanMascotaJugador.innerHTML = mascotaSeleccionada.id

        mascotaJugadorObjeto = mokepones.find((mokepon) => mokepon.nombre === mascotaSeleccionada.id)

        sectionSeleccionarMascota.style.display = "none"
        sectionVerMapa.style.display = 'flex'
        sectionSeleccionarAtaque.style.display = "none"


        seleccionarMokepon(mascotaSeleccionada.id) 

        iniciarMapa()
        seleccionarMascotaEnemigo()
    } else {
        alert('Selecciona una mascota')
    }
}

    function seleccionarMokepon (mascotaJugador) {

        fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
            method: "post",
            headers: {

                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                mokepon: mascotaJugador
            })
        })

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
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.VelocidadY
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.VelocidadX

    lienzo.clearRect(0, 0, mapa.width, mapa.height)

    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

   mascotaJugadorObjeto.pintarMokepon()
   GatoMarcianoEnemigo.pintarMokepon()
   cucheEnemigo.pintarMokepon()
   MapacheEnemigo.pintarMokepon()

   if (mascotaJugadorObjeto.VelocidadX !== 0 || mascotaJugadorObjeto.VelocidadY !== 0) {

    revisarColision(GatoMarcianoEnemigo)
    revisarColision(cucheEnemigo)
    revisarColision(MapacheEnemigo)
   }

}




function moverGatoDerecha () {
    mascotaJugadorObjeto.VelocidadX = 5
}

function moverGatoIzquierda () {
    mascotaJugadorObjeto.VelocidadX = -5
}

function moverGatoArriba () {
    mascotaJugadorObjeto.VelocidadY = -5
}

function moverGatoAbajo () {
    mascotaJugadorObjeto.VelocidadY = 5
}

function detenerMovimiento () {
    mascotaJugadorObjeto.VelocidadX = 0
    mascotaJugadorObjeto.VelocidadY = 0
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

    mapa.width = 850
    mapa.height = 600

    window.addEventListener('keydown',sePresionoUnaTecla)
    window.addEventListener('keyup',detenerMovimiento)

    intervalo = setInterval(pintarCanvas, 50)

}

function revisarColision(enemigo) {
        const arribaEnemigo = enemigo.y
        const abajoEnemigo = enemigo.y + enemigo.alto
        const derechaEnemigo = enemigo.x + enemigo.ancho
        const izquierdaEnemigo = enemigo.x 


      const arribaMascota = mascotaJugadorObjeto.y
        const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
        const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
        const izquierdaMascota = mascotaJugadorObjeto.x 


    if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo 
    ) {

        return
    }

        detenerMovimiento()
        
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'none'
}



window.addEventListener('load', iniciarJuego)

window.load = function () {
    document.querySelectorAll('input[name="mascota"]')
        .forEach(radio => radio.checked = false)
}