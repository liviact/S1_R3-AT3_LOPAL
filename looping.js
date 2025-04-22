let soma = 0;

// for para pedir 10 números
for (let i = 1; i <= 10; i++) {
    // Solicita ao usuário para digitar um número
    let numero = parseInt(prompt(`Digite o ${i}º número:`));
    
    // Adiciona o número à soma
    soma += numero;
}

// Exibe a soma total dos números
alert(`A soma dos 10 números é: ${soma}`);
