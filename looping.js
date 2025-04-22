// Solicita ao usuário um número
let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
if (isNaN(numero)){
    alert ("digite um número válido");
}

let resultado;
let frase="";
// Exibe a tabuada do número de 1 a 10
for (let i = 1; i <= 10; i++) {
    resultado= numero * i;
    frase +=`${numero} * ${i} = ${resultado} \n`;
}

alert (frase);
