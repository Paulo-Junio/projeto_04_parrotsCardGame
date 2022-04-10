

function quantidadeCartas () {
   let numeroDeCartas= Number(prompt("Com quantas cartas quer jogar? (De 4 à 14 cartas)"));
   let contador=0;
   while (contador===0) {
        let divisao =numeroDeCartas;
        divisao =(divisao%=2);
        if (numeroDeCartas>=4 && numeroDeCartas<=14 && divisao===0) {
            contador ++
    } else {numeroDeCartas= Number(prompt("Por favor, insira um número entre 4 e 14"));}     
   }
   sotearCartas(numeroDeCartas)
}
let repeticao;
function sotearCartas(numeroDeCartas) {
    repeticao = (numeroDeCartas/2)
    const cartas=["images/bobrossparrot.gif","images/explodyparrot.gif","images/fiestaparrot.gif","images/metalparrot.gif","images/revertitparrot.gif","images/tripletsparrot.gif","images/unicornparrot.gif"];
    cartas.sort(comparador)
    for (let i = 0; i<2; i++) {
        for (let i = 0; i<repeticao; i++) {
            let elemento= document.querySelector(".card-box");
            elemento.innerHTML += `<div class="card" onclick="escolherCarta(this)" >
                <div class="face frente">
                <img src="images/front.png" >
                </div>
                <div class="face verso">
                <img src="${cartas[i]}">
                </div>
            </div>`
           
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

let numeroViradas= 1;
let jogadas =0;
let cartaUm="";
let cartaDois="";
let elementoUm;
let elementoDois;
function escolherCarta(elemento) {
    console.log("to escolhendo")
    jogadas ++
    if (numeroViradas===1){
        elementoUm;
        cartaUm= elemento.querySelector(".face.verso").innerHTML
        elementoUm=elemento;
        elemento.querySelector(".face.verso").classList.add("virada");
        elemento.querySelector(".face.virada").classList.remove("verso");
        numeroViradas ++
        console.log(numeroViradas)

    } else {
        elementoDois;
        cartaDois= elemento.querySelector(".face.verso").innerHTML
        elementoDois=elemento;
        elemento.querySelector(".face.verso").classList.add("virada");
        elemento.querySelector(".face.virada").classList.remove("verso");
        numeroViradas=1
        console.log(cartaUm)
        console.log(cartaDois)
        setTimeout(compararCarta, 1000)
    }
    
}


let parFormado=0;
function compararCarta() {
    console.log("ENTREIIII")
    if (cartaUm===cartaDois){
        parFormado ++
        console.log("é igual")
    } else {
        setTimeout(desvirarCarta(), 5000)
        cartaUm="";
        cartaDois="";
        console.log("nao é igual")
        console.log(parFormado)
        console.log(cartaUm)
        console.log(cartaDois)
    }

}

function desvirarCarta() {
        elementoUm.querySelector(".face.virada").classList.add("verso");
        elementoUm.querySelector(".face.virada").classList.remove("virada");  
        elementoDois.querySelector(".face.virada").classList.add("verso");
        elementoDois.querySelector(".face.virada").classList.remove("virada");  
}



quantidadeCartas()

