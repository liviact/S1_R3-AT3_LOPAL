// solicita ao usuário os dois números
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("erro, digite um número válido!")
} else {

    // determina o menor e maior número manualmente usando if
    let inicio;
    let fim;

    if (numero1 < numero2) {
        inicio = numero1;
        fim = numero2;
    } else {
        inicio = numero2;
        fim = numero1;
    }
    let frase = ""
    // exibe todos os números pares no intervalo
    for (let i = inicio; i <= fim; i++) {
        // verifica se o número é par
        if (i % 2 === 0)
            frase += `${i} \n`; {
        }
    }
    alert(frase);
}