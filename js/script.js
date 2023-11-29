let button = document.querySelector(".btn");
let grid = document.querySelector(".griglia");

button.addEventListener("click",function(){
    for (let i = 0; i < 100; i++) {
        let casellaGriglia = creaCasella(i+1)
        grid.appendChild(casellaGriglia);
    }
})

function creaCasella(numeroCasella){
    let casella = document.createElement('div');
    casella.classList.add("casella");
    casella.innerText = numeroCasella ;
    return casella;
}