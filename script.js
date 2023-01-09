const frutas = ["laranja", "limão", "uva"];

const listaDeFrutas = document.getElementById("lista-de-frutas")

const frutaUm = document.getElementById("fruta-1").innerHTML = frutas[0]
// frutaUm.innerHTML = frutas[0]
const frutaDois = document.getElementById("fruta-2").innerHTML = frutas[1]
// frutaDois.innerHTML = frutas[1]
const frutaTres = document.getElementById("fruta-3").innerHTML = frutas[2]
// frutaTres.innerHTML = frutas[2]
// 
// const frutaQuatro = document.getElementById("fruta-4").innerHTML = frutas[3]
// frutaQuatro.innerHTML = frutas[4]

//Exercício 2
let frutaNova
const imprimirValorImput = () => {
    frutaNova = document.getElementById("nova-fruta").value
    console.log(frutaNova)
}

//Exercício 3
const adcionarItens = () => {
    if (frutas.length === 3) {
        frutas.push(frutaNova)
        const frutaQuatro = document.getElementById("fruta-4")
        frutaQuatro.innerHTML = frutas[3]
        console.log(frutas)
    } else {
        frutas.push(frutaNova)
        let lista = document.getElementById("lista-de-frutas")
        lista.innerHTML += `<li class ='nova-fruta'> ${frutaNova} </li>`
        console.log(frutas)
    }
}

const limpaInputs = () => {
    frutaNova.value = ""
}