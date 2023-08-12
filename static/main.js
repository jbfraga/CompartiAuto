document.body.style.height = `${window.innerHeight}px`

window.addEventListener("resize",()=>{document.body.style.height = `${window.innerHeight}px`} )

function selecionarVeiculo(elment){
    let placa = elment.getAttribute("placa");
    let status = elment.getAttribute("status-veiculo");

    console.log(`O veiculo ${placa} esta ${status}`);
}
