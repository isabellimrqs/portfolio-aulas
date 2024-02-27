// Acerte o número

// function gerarNumero(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function jogoDeAdivinhacao() {
//     alert("Pense em um número de 1 a 100 e eu vou adivinhar!! XD");

//     let min = 1;
//     let max = 100;
//     let tentativas = 5;

//     while (tentativas > 0) {
//         let palpite = gerarNumero(min, max);
//         let resposta = prompt("Por acaso, seu número é...  " + palpite + "? (Digite 'sim', 'maior' ou 'menor')");

//         if (resposta === "sim") {
//             alert("Acerteiiiiiiiiii! MUAHAHAHAHAHAHA Seu número é " + palpite + "!");
//             return;
//         } else if (resposta === "maior") {
//             min = palpite + 1;
//         } else if (resposta === "menor") {
//             max = palpite - 1;
//         } else {
//             alert("não entendi :P PLS, responda 'sim', 'maior' ou 'menor'.");
//             continue;
//         }

//         tentativas--;
//     }

//     alert("afff, nao foi dessa vez :'(");
// }

// jogoDeAdivinhacao();

// Jokenpo
// while (true) {
//     alert('Oieeee, vamos brincar :D');
//     alert('Hoje vamos jogar pedra, papel e tesoura!!!! ');

//     let usuario = 'pedra'; 
//     let computador;

    
//     let escolhaAleatoria = Math.floor(Math.random() * 3);
//     if (escolhaAleatoria === 0) {
//         computador = 'pedra';
//     } else if (escolhaAleatoria === 1) {
//         computador = 'papel';
//     } else {
//         computador = 'tesoura';
//     }

//     alert('Você escolheu: ' + usuario);
//     alert('O computador escolheu: ' + computador);

//     if (usuario === computador) {
//         alert('Empatouuu!');
//     } else if ((usuario === 'pedra' && computador === 'tesoura') ||
//                (usuario === 'papel' && computador === 'pedra') ||
//                (usuario === 'tesoura' && computador === 'papel')) {
//         alert('Você ganhou!');
//     } else {
//         alert('Você perdeu! O computador ganhou!');
//     }

//     let jogarNovamente = confirm('Deseja jogar novamente?');
//     if (!jogarNovamente) {
//         alert('byeee');
//         break;
//     }
// }

// Fibonacci
// const numero = 10
// let n1 = 0, n2 = 1, proximoTermo;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= numero; i++) {
//     console.log(n1);
//     proximoTermo = n1 + n2;
//     n1 = n2;
//     n2 = proximoTermo;
// }

// soma dos cubos 
// function somaDosCubos() {
//     var soma = 0;
//     for (var i = 1; i <= 10; i++) {
//         soma += Math.pow(i, 3);
//     }
//     return soma;
// }


// console.log("A soma dos cubos dos 10 primeiros números naturais é:", somaDosCubos());

// fatorial 
// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1; 
//     } else {
//         var resultado = 1;
//         for (var i = 2; i <= numero; i++) {
//             resultado *= i;
//         }
//         return resultado;
//     }
// }

// var numero = parseInt(prompt("Digite um número para calcular o fatorial:"));


// var fatorial = calcularFatorial(numero);
// console.log("O fatorial de", numero, "é:", fatorial);
























