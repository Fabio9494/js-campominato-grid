
function nuovaGriglia(){
    document.querySelector(".griglia");
    let difficolta = document.getElementById("difficolta");
    let livelloDifficolta = parseInt(difficolta.value);

    let numeroCelle;
    let cellePerRiga;
    switch(livelloDifficolta){
       case 1:
        numeroCelle = 49;
        cellePerRiga = 7;
        console.log("uno");
        creazioneGriglia(numeroCelle,cellePerRiga);
        break;
       case 2:
        numeroCelle = 81;
        cellePerRiga = 9;
        console.log("due");
        creazioneGriglia(numeroCelle,cellePerRiga);
        break;
       case 3:
        numeroCelle = 100;
        cellePerRiga = 10;
        console.log("tre");
        creazioneGriglia(numeroCelle,cellePerRiga);
        break;
       default:
        numeroCelle = 100;
    }
}

function creazioneGriglia(numeroCelle,cellePerRiga){
    let grid = document.querySelector(".griglia");
    for (let i = 0; i < numeroCelle; i++) {
        let casellaGriglia = creaCasella(i+1,cellePerRiga)
        grid.appendChild(casellaGriglia);
        casellaGriglia.addEventListener("click",function(){
            this.classList.toggle("click");
            console.log("casella numero: " + this.outerText);
        })
    }
}

function creaCasella(numero,cellePerRiga){
    let casella = document.createElement('div');
    casella.classList.add("casella");
    casella.innerText = numero;
    let dimCasella = `calc(100vw / ${cellePerRiga} - 5px)`;
    casella.style.width = dimCasella;
    casella.style.height = dimCasella;
    return casella;
}

document.querySelector(".btn").addEventListener("click",function(){
    nuovaGriglia();
})