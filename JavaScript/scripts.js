
let repeticao;
let numeroViradas= 1;
let jogadas =0;
let cartaUm="";
let cartaDois="";
let elementoUm;
let elementoDois;
let parFormado=0;
let escolherProximas=0;


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

function sotearCartas(numeroDeCartas) {
    repeticao = (numeroDeCartas/2)
    const cartas=["Images/bobrossparrot.gif","Images/explodyparrot.gif","Images/fiestaparrot.gif","Images/metalparrot.gif","Images/revertitparrot.gif","Images/tripletsparrot.gif","Images/unicornparrot.gif"];
    let cartasBaralho =[];
    for (let i = 0; i<2; i++){
        for (let i = 0; i<repeticao; i++)
        cartasBaralho.push(cartas[i]);
    }
    cartasBaralho.sort(comparador)
    for (let i = 0; i<numeroDeCartas; i++) {
        let elemento= document.querySelector(".card-box");
        elemento.innerHTML += `<div class="card" onclick="escolherCarta(this)" >
            <div class="face frente">
            <img src="./images/front.png" >
            </div>
            <div class="face verso">
            <img src="./${cartasBaralho[i]}">
            </div>
        </div>`
        
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}

function escolherCarta(elemento) {
    jogadas ++
    if (escolherProximas===0){
        if (numeroViradas===1){
            elementoUm;
            cartaUm= elemento.querySelector(".face.verso").innerHTML
            elementoUm=elemento;
            elemento.querySelector(".face.verso").classList.add("virada");
            elemento.querySelector(".face.virada").classList.remove("verso");
            numeroViradas ++

        } else {
            elementoDois;
            cartaDois= elemento.querySelector(".face.verso").innerHTML
            elementoDois=elemento;
            elemento.querySelector(".face.verso").classList.add("virada");
            elemento.querySelector(".face.virada").classList.remove("verso");
            numeroViradas=1
            escolherProximas=1;
            setTimeout(compararCarta, 1000)
        }
    }
}

function compararCarta() {
    if (cartaUm===cartaDois){
        parFormado ++
        escolherProximas=0;

    } else {
        desvirarCarta()
  
    }
    if (parFormado===repeticao) {
        finalizarJogo()
    }
}

function desvirarCarta() {
        elementoUm.querySelector(".face.virada").classList.add("verso");
        elementoUm.querySelector(".face.virada").classList.remove("virada");  
        elementoDois.querySelector(".face.virada").classList.add("verso");
        elementoDois.querySelector(".face.virada").classList.remove("virada");
        escolherProximas=0;  
}

function finalizarJogo() {
    alert(`Você ganhou em ${jogadas} jogadas!`)

}

quantidadeCartas()

