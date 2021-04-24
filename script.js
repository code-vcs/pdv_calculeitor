let input = document.getElementsByTagName('input');

let produto = document.querySelector('#produto');
let quantidade = document.querySelector('#quantidade-produto');
let valorProduto = document.querySelector('#valor-produto');
let descontoProduto = document.querySelector('#desconto-sobre-produto');
let descontoPercentual = document.querySelector('#desconto-percentual');
let total = document.querySelector('#total');


let product = (produto.value);

function botaoComprar() {
    if (input[0].value == "" || input[1].value == "" || input[2].value == "") {
        alert("Campos vazios hfavor ferificar !")
    } else {
        let qunatidadeSelecionada = Number(quantidade.value);
        let valProduct = parseFloat(valorProduto.value);

        let valorCalculado = qunatidadeSelecionada * valProduct;
        total.value = valorCalculado.toFixed(2)
        //    limpando os campos   0  1  2
        input[0].value = ""; input[1].value = ""; input[2].value = ""

    }

}

window.addEventListener('keydown', (z) => {
    if (z.key == 'F3') {
        descontoProduto.disabled = false
    }
})


descontoProduto.addEventListener('keyup', (x) => {
    if (input[3].value !== "" || x.key !== 'Enter') {

        let descProduct = parseFloat(descontoProduto.value);
        let descPercent = parseFloat(descontoPercentual.value);
        if (x.key == 'Enter') {
            let calcularDesconto = total.value - (total.value - descProduct);
            let calcTot = parseFloat(calcularDesconto / total.value);
            descontoPercentual.value = calcTot.toFixed(2) + "%"
            console.log(typeof descontoPercentual.value);

            let resposta = total.value - (total.value * calcTot);
            total.value = resposta.toFixed(2)
        }
    }
})