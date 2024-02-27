//1) diferença de dois números

// let num1 = window.prompt("Digite o primeiro número: ");
// let num2 = window.prompt("Digite o segundo número: ");
// let diferenca = (num1 - num2);
// window.alert("A diferença é: " + diferenca);

// //2) número ímpar e par
// let num1 = window.prompt("Digite um número: ");

// if (num1 / 2 === 0){
//     window.alert('O número é par');
// } else {
//     window.alert('O número é ímpar');
// }

// //3) multiplo
// let nota1 = window.prompt("Digite a primeira nota: ");
// let nota2 = window.prompt("Digite a segunda nota: ");

// if (nota1 % nota2 === 0 || nota2 % nota1 === 0){
//     window.alert('O número é múltiplo');
// } else {
//     window.alert('O número não é múltiplo');
// }

// //4) celsius para fahrenheit
// let celsius = window.prompt("Digite a temperatura em Celsius: ");
// let fahrenheit = (celsius*1.8)+32;
// window.alert("A temperadora convertida para fahrenheit é: " + fahrenheit);

// //5) área do quadrado
// let base = window.prompt("Digite a base do quadrado: ");
// let altura = window.prompt("Digite a altura do quadrado: ");
// let area = base * altura;
// window.alert('A área do quadrado é: ' + area);

// //6) acima da média e par
// let nota1 = window.prompt("Digite a primeira nota: ");
// let nota2 = window.prompt("Digite a segunda nota: ");
// let media = (nota1 + nota2)/2;
// let par = media % 2 === 0;

// if ((media >= 5) && (par)){
//     window.alert("O número é par e acima da média");
// } else {
//     window.alert("O número não é par e acima da média");
// }

// 7) IMC
// let peso = window.prompt("Digite seu peso: ");
// let altura = window.prompt("Digite sua altura (separado por ponto): ");
// let imc = peso / (altura*2);
// let imcArredondado = imc.toFixed(2);
// window.alert('Seu IMC é: ' + imcArredondado);

// 8) Ano bissexto 
// ano = window.prompt('Digite um ano: ')
// if( (ano%400 == 0) || (ano%4==0 && ano%100!=0) )
//     window.alert("É bissexto");
// else
//     window.alert("Não é bissexto");

// 9) Taxa de câmbio
// var taxa = parseFloat(window.prompt("Digite a taxa de câmbio: "))
//         var valor = Number(window.prompt("Digite o valor desejado: "))
//         var conversor = taxa * valor
//         window.alert("O valor convertido é: " + conversor)
