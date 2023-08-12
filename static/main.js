document.body.style.height = `${window.innerHeight}px`

window.addEventListener("resize", () => { document.body.style.height = `${window.innerHeight}px` })

function selecionarVeiculo(elment) {
    let placa = elment.getAttribute("placa");
    let status = elment.getAttribute("status-veiculo");

    switch (status) {
        case `disponivel`:
            const telaPopUp = document.getElementById("tela-popup");
            const sections = document.querySelectorAll("section");

            telaPopUp.innerHTML = `
            <div class="container-form">
                <!-- SELECIONAR OPCAO -->
                <!-- ################ -->
                <p>Selecione uma Opcao</p>
                <p class="info-ult-motorista">Motorista <strong>Roberto Gomes</strong></p>
                <div class="selecionar-opcao">
                    <p class="info-ult-motorista">Placa <strong>ABC1234</strong></p>
                    <button onclick="iniciarQrCode()">Dirigir</button>
                    <button onclick="irParaTelaReservarVeiculo()">Agendar</button>
                    <button onclick="fecharPopUp()">Cancelar</button>
                </div>
            </div>
            `

            setTimeout(telaPopUp.classList.add("show-popup"),500);

            sections.forEach((element)=>{element.classList.add("focus-off")})

            break;

        default:
            break;
    }

    console.log(`O veiculo ${placa} esta ${status}`);
}



function fecharPopUp() {
    const telaPopUp = document.getElementById("tela-popup");
    const displayOff = document.querySelectorAll(".focus-off");

    telaPopUp.classList.remove("show-popup");

    displayOff.forEach((element) => element.classList.remove("focus-off"));
}

function iniciarQrCode() {
    const telaPopUp = document.getElementById("tela-popup");
    const telaPopUpForm = telaPopUp.querySelector("div.container-form");

    telaPopUpForm.innerHTML = `
    <!-- TELA QR COD -->
    <!-- ########### -->
    <div class="tela-qr-code">
        <label class="file-scan-btn" for="file-scan">Registrar QR</label>
        <input type="file" name="file-scan" id="file-scan" accept="image/*" hidden>

        <p class="file-scan-result">Resultado Laitura</p>
    </div>

    <button onclick="fecharPopUp()">Cancelar</button>
    `
};

function irParaTelaReservarVeiculo() {
    const telaPopUp = document.getElementById("tela-popup");
    const telaPopUpForm = telaPopUp.querySelector("div.container-form");

    telaPopUpForm.innerHTML = `
    <!-- RESERVAR VEICULO (Agendar) -->
    <!-- ########################## -->
    <p>Reservando veiculo</p>
    <p class="info-ult-motorista">Motorista <strong>Roberto Gomes</strong></p>
    <p class="info-ult-motorista">Placa <strong>ABC1234</strong></p>
    <form action="#">
        <input type="text" name="placa" hidden>
        <input type="text" name="status" hidden>
        <input type="date" name="date">
        <input type="time" name="time">
        <button>Confirmar</button>
        <button onclick="fecharPopUp()">Cancelar</button>
    </form>
    `
};


