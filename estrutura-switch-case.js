
function acaobotao(){
    var valor01, valor02, resultado, operacao
    
    valor01 = prompt("Digite o valor 01: ")
    operacao = prompt("Digite a operação: Ex: +, -, *, / ")
    valor02 = prompt("Digite o valor 02: ")

    switch (operacao) {
        case "+":
            resultado = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            resultado = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            resultado = parseInt(valor01) * parseInt(valor02)
            break;
        case "/":
            resultado = parseInt(valor01) / parseInt(valor02)
            break;
    }
    document.getElementById("paragrafo").innerText = resultado
}
