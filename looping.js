// Inicializa a variável soma, que vai acumular as notas
let soma = 0;

// Variável para armazenar a nota digitada pelo usuário
let nota;

// Inicia o loop que irá rodar 5 vezes (uma para cada nota)
for (let i = 1; i <= 5; i++) {
  nota = parseFloat(prompt(`Digite a nota ${i}:`));

  // Este loop verifica se a nota é válida (não é NaN e está no intervalo de 0 a 10)
  for (let tentativas = 0; isNaN(nota) || nota < 0 || nota > 10; tentativas++) {
    // Se não for a primeira tentativa, avisa que a entrada foi inválida
    if (tentativas > 0) {
      alert("Nota inválida. Digite novamente.");
    }
  }

  // Após a entrada válida, adiciona a nota à soma
  soma += nota;
}

// Após o loop terminar, calcula a média dividindo a soma das notas por 5
let media = soma / 5;

// Exibe o resultado da média com duas casas decimais
alert(`A média das notas é: ${media.toFixed(2)}`);
