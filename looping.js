const num = parseInt(prompt("Digite um número para eu dizer os números até ele:"));

if (isNaN(num) || num <= 1) {
    alert("ERRO: você não digitou um número válido!");
} else {
    let numeros = ""; // variável para guardar os números

    for (let i = 1; i <= num; i++) {
        numeros += i + "\n"; // adiciona número com quebra de linha
    }

    console.log(`Números de 1 até ${num} são:\n${numeros}`);
}
