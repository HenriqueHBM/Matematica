function Enviar() {

    //pegando os valores digitados no input pela "id" e armazenando numa variavel
    var valorA = document.getElementById("valorA").value;
    var valorB = document.getElementById("valorB").value;
    var valorC = document.getElementById("valorC").value;

    //calculando o delta de bhaskara
    var delta = (valorB ** 2) - 4 * (valorA) * (valorC);

    document.getElementById("delta").innerText = delta;
    //tirando o x positivo e negativo  da bhaskara
    var xPositivo = (-(valorB) + (Math.sqrt(delta))) / (2 * valorA).toFixed(2);
    var xNegativo = (-(valorB) - (Math.sqrt(delta))) / (2 * valorA);

    //passando uma mensagem de falha no resultado(valores invalidos)
    if (delta < 0 || Math.sqrt(delta) != Math.sqrt(delta).toFixed()) {
        return document.getElementById("resultado").innerHTML = "não existe raiz real";
    } else {
        //printando na tela o resultado
        document.getElementById("resultado").innerHTML = " XI : " + xPositivo + "<p>XII : " + xNegativo;
    }
}