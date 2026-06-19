const express = require("express")

const cors = require("cors") //despues de insatalar la libreria habilite la libreria cors en el codigo para que no salte el bloque

const app = express()

app.use(cors())  //aqui hago que se use la libreria que defini arriba de cors
app.use(express.json())  //habilite capacidad de recibir peticiones post que traigan contenido en formato JSON

const jugadores = []

class Jugador {

        constructor(id) {

            this.id = id
        }

        asignarMokepon(mokepon) {

         this.mokepon = mokepon

        }

}



class Mokepon {
constructor(nombre) {
    this.nombre = nombre

}

}


app.get("/unirse", (req, res) => {  //endpoint peticion

    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)


    res.setHeader("Access-Control-Allow-Origin", "*")


    res.send(id)

})


app.post("/mokepon/:jugadorId", (req, res)=> {
const jugadorId = req.params.jugadorId || ""
const nombre = req.body.mokepon || ""
const mokepon = new Mokepon(nombre)


const jugadorIndex =  jugadores.findIndex((jugador) => jugadorId === jugador.id)
if (jugadorIndex >= 0) {

    jugadores[jugadorIndex].asignarMokepon(mokepon)

}

console.log(jugadores)
console.log(jugadorId)
res.end()

})


app.listen(8080, () => {
    console.log("servidor funcionando")
})