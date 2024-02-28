// 1) Elevado ao quadrado
// function QuadradoDoNumero (numero) {
//     return numero ** 2;
// }

// numeroElevado = QuadradoDoNumero(prompt('Digite um número: '));

// console.log(numeroElevado)

// 2) Par ou ímpar
// function ParOuImpar(numero){
//     if (numero % 2 === 0){
//         alert('Número é par');
//     } else {
//         alert('Número é ímpar');
//     }
// }

// numeroAdivinhar = ParOuImpar(prompt('Digite um número: ')); 

// console.log(numeroAdivinhar);
 
// 3) Maior de 3
// let n1 = parseInt(prompt('Digite o primeiro número: '));
// let n2 = parseInt(prompt('Digite o segundo número: '));
// let n3 = parseInt(prompt('Digite o terceiro número: '));

// function maiorNumero(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }

// let resultado = maiorNumero(n1, n2, n3);
// alert('O maior número é ' + resultado);

// 4) Calculadora
// let n1 = parseFloat(prompt('Digite o primeiro valor: '));
// let n2 = parseFloat(prompt('Digite o segundo valor: '));
// let operation = prompt('Digite a operação: ');

// function calculadora(n1, n2, operation) {
//     let result;
//     switch (operation) {
//         case 'soma':
//             result = n1 + n2;
//             break;
//         case 'subtracao':
//             result = n1 - n2;
//             break;
//         case 'divisao':
//             result = n1 / n2;
//             break;
//         case 'multiplicacao':
//             result = n1 * n2;
//             break;
//         case 'exponenciacao':
//             result = Math.pow(n1, n2);
//             break;
//         case 'raiz':
//             result = Math.sqrt(n1);
//             break;
//         case 'percentual':
//             result = (n1 / 100) * n2;
//             break;
//         case 'fibonacci':
//             if (Number.isInteger(n1) && n1 >= 0) {
//                 result = fibonacci(n1);
//             } else {
//                 result = "Número inválido para Fibonacci";
//             }
//             break;
//         case 'fatorial':
//             if (Number.isInteger(n1) && n1 >= 0) {
//                 result = fatorial(n1);
//             } else {
//                 result = "Número inválido para Fatorial";
//             }
//             break;
//         default:
//             result = "Operação inválida";
//             break;
//     }
//     return result;
// }

// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function fatorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * fatorial(n - 1);
// }

// let resultado = calculadora(n1, n2, operation);
// alert('Resultado: ' + resultado);

