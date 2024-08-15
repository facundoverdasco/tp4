//actividad 1
let jugadores = ["sosa", "arthur", "anna", "thiago", "juan"]
//actividad 2
let puntajes = []
for (let indice = 0; indice < 5; indice=indice+1) {
    let puntaje = (prompt("Ingrese el puntaje para el jugador " + jugadores[indice]))
    puntajes.push(puntaje)
}

//actividad 3

let maxpuntaje = puntajes[0]
let maxjugador = jugadores[0]

for (let indice = 1; indice < puntajes.length; indice=indice+1) {
    if (puntajes[indice] > maxpuntaje) {
        maxpuntaje = puntajes[indice]
        maxjugador = jugadores[indice]
    }
}
console.log("El puntaje más alto es " + maxputaje + " y  lo posee " + maxjugador)

//actividad 4

let minpuntaje = puntajes[0]

for (let index = 1; index < puntajes.length; index=index+1) {
    if (puntajes[index] < minpuntaje) {
        minpuntaje = puntajes[index]
    }
}
console.log("El puntaje más bajo es " + minpuntaje)

//actividad 5

let jugadornew = prompt("ingrese un jugador")
let puntajenew = prompt("ingrese un puntaje para"+jugadornew)

//actividad 6

console.log ("elnumero de puntajes guardados es" + Array.length)

//actividad 7

puntajes [4] = prompt("modifica el anteultimo puntaje")
puntajes [5] = prompt("modifica el ultimo puntaje")



