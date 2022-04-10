

function quantidadeCartas () {
   let numeroDeCartas= Number(prompt("Com quantas cartas quer jogar? (De 4 à 14 cartas)"));
   let contador=0;
   while (contador===0) {
        let divisao =numeroDeCartas;
        divisao =(divisao%=2);
        if (numeroDeCartas>=4 && numeroDeCartas<=14 && divisao===0) {
            contador ++
    } else {numeroDeCartas= Number(prompt("Por favor, insira um número entre 4 e 14"));}     
    console.log(divisao);
   }
   sotearCartas(numeroDeCartas)
}
let elemento;
function sotearCartas(numeroDeCartas) {
    let repeticao = (numeroDeCartas/2)
    const cartas=["images/bobrossparrot.gif","images/explodyparrot.gif","images/fiestaparrot.gif","images/metalparrot.gif","images/revertitparrot.gif","images/tripletsparrot.gif","images/unicornparrot.gif"];
    cartas.sort(comparador)
    for (let i = 0; i<2; i++) {
        for (let i = 0; i<repeticao; i++) {
            elemento= document.querySelector(".card-box");
            elemento.innerHTML += `<div class="card" onclick="compararCartas(this)" >
                <div class="face frente">
                <img src="images/front.png" >
                </div>
                <div class="face verso">
                <img src="${cartas[i]}">
                </div>
            </div>`
            console.log(elemento)
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function compararCartas(elemento) {
    const cartaClicada = elemento.querySelector(".face.verso").classList.remove("verso");
    console.log(cartaClicada)

}
quantidadeCartas()