 //code reference: Chanel: AsmrProg (YT:https://www.youtube.com/watch?v=sBJmRD7kNTk);
 let runningTotal = 0;
 let buffer = "0";
 let previousOperator;

 const tela = document.querySelector('.tela');

 function buttonClick(value) {
     //verificando se o valor é string ou valor(int/float);
     if (isNaN(value)) {
         //chamando outra função;
         handleSymbol(value);
     } else {
         //chamando outra função;
         handleNumber(value);
     }
     //imprimindo na tela o resultado;
     tela.innerText = buffer;
 }

 //função reconhecendo os symbolos da calculadora e fazendo seus cálculos
 function handleSymbol(symbol) {
     switch (symbol) {
         case "C":
             buffer = '0';
             runningTotal = 0;
             break;
         case '=':
             if (previousOperator === null) {
                 return
             }
             //função recebendo valor transformado de String para Int, e fazendo os cálculos;
             flushOperation(parseInt(buffer));
             previousOperator = null;
             buffer = runningTotal;
             runningTotal = 0;
             break;
         case 'AC':
             if (buffer.length === 1) {
                 buffer = '0';
             } else {
                 buffer = buffer.substring(0, buffer.length - 1);
             }
             break;
         case '+':
         case '−':
         case '×':
         case '÷':
         case '%':
             handleMath(symbol);
             break;
     }
 }

 function handleMath(symbol) {
     if (buffer === '0') {
         return;
     }
     //transformando o valor de String para Inteiro;
     const intBuffer = parseInt(buffer);

     //se o valor já estiver como inteiro, recebe-o, senão  chamando outra função para fazer os cálculo;
     if (runningTotal === 0) {
         runningTotal = intBuffer;
     } else {
         flushOperation(intBuffer);
     }
     previousOperator = symbol;
     buffer = '0';
 }

 //função para fazer os cálculo;
 function flushOperation(intBuffer) {
     if (previousOperator === '+') {
         runningTotal += intBuffer;
     } else if (previousOperator === '−') {
         runningTotal -= intBuffer;
     } else if (previousOperator === '×') {
         runningTotal *= intBuffer;
     } else if (previousOperator === '÷') {
         runningTotal /= intBuffer;
     } else if (previousOperator === '%') {
         runningTotal /= 100;
     }
 }

 //função fazendo verificação se o valor é String ou valor(int/float) e recebendo o mesmo;
 function handleNumber(numberString) {
     if (buffer === "0") {
         buffer = numberString;
     } else {
         buffer += numberString;
     }
 }

 //função pegando os valores apertados e chamando outra função para fazer todo os cálculos;
 function init() {
     document.querySelector('.calc-buttons').addEventListener('click', function(event) {
         buttonClick(event.target.innerText);
     })
 }

 //iniciando as funções;
 init();

 /*
  //pegando os valores digita nos input e passando para uma variavel
  var n1 = document.querySelector("#n1");
  var n2 = document.querySelector("#n2");
  var resultado = document.querySelector("span");

  function somar() {
      //somando os valores digitados
      resultado.innerHTML = parseInt(n1.value) + (parseInt(n2.value));
  }

  function subtrair() {
      resultado.innerHTML = parseInt(n1.value) - (parseInt(n2.value));
  }

  function multiplicar() {
      resultado.innerHTML = parseInt(n1.value) * (parseInt(n2.value));
  }

  function dividir() {
      resultado.innerHTML = parseInt(n1.value) / (parseInt(n2.value));
  }

  function porcentagem() {

  }
  */