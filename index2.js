let numeros=[]
for (let index = 0; index < 5; index++) {
  numeros.push = prompt("ingresa un numero")  
    console.log(numeros)
}

for (let indice = 0; indice < numeros.length; indice = indice+1) {
    if (numeros[indice] > 20) {
        numeros[indice] *= 2;
    }

for (let indice = 0; indice < numeros.length; indice = indice+1) {
    if (numeros[indice] % 2 == 0) {
        numeros[indice] *= 3
    }
}
console.log("El arreglo modificado es:", numeros)