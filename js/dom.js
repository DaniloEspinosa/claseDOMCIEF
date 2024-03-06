// DOM

const parrafo1 = document.getElementById("parrafo1")
console.log(parrafo1)

document.querySelector("#parrafo2").textContent = "Soy el párrafo 2 que viene desde JavaScript"

document.querySelector("#parrafo3").innerText = "Soy el párrafo 3 que viene desde JavaScript"

document.querySelector("#parrafo4").innerHTML = "Soy el <strong>párrafo</strong> 4 que viene desde JavaScript <i><span onclick='textoColorRojo()'>Cambiar</span></i> <i><span onclick='volver()'>Volver</span></i>"

document.querySelector("#parrafo3").onclick = "textoColorRojo()"

function textoColorRojo() {
    let estilo = document.querySelector("#parrafo4")
    estilo.style.color = "red"
    estilo.style.border = "2px solid blue"
}

function volver() {
    document.querySelector("#parrafo4").style.color = "black"
    document.querySelector("#parrafo4").style.border = "none"
}

let parrafo5 = document.querySelector("#parrafo5")
parrafo5.innerHTML = "Soy el <strong>párrafo</strong> 5 que viene desde JavaScript"

parrafo5.onclick = cambiarEstilo  //No hay que poner los parentesis
function cambiarEstilo() {
    parrafo5.classList.add("textoInteresante")
    parrafo1.classList.add("textoInteresante")

}

/*
// Esta sintaxis hace lo mismo que lo de arriba pero en menos lineas
parrafo5.onclick = function () {
    parrafo5.classList.add("textoInteresante")
}

// Esta sintaxis hace lo mismo que lo de arriba pero en menos lineas
parrafo5.onclick = () => {
    parrafo5.classList.add("textoInteresante")
}
*/

let array1 = ["Pep", "Maria"]
let array2 = ["Marta", "Joan"]

console.log(array1.concat(array2))
console.log(array1)

// Cuando una funcion es declarada como una variable si que importa el orden
// No se ajusta a las reglas del hoisting
// Quiere decir que este tipo de funcion solo se puede llamar despues que ha sido creada
let miFuncion = function () {
    console.log("Hola")
}

miFuncion()

if (array1.length > 1) console.log("Hay muchos elementos")