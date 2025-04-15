// constante que armazenará o número solicitado

const numero = parseInt(prompt("digite um número, por favor:"));

if (isNaN(numero) || numero<1 ) {
    alert("você não escreveu um número válido.");
} else {
    let numUm = 0
    for (let i = 1 ; i <= numero; i++) {
        numUm+=`${i}\n`
    }
    alert(`os numeros até ${numero} são ${numUm}`);


}