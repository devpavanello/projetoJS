//Alerta ao recarregar uma página
alert('Boas vindas ao jogo do número secreto!');

//Criação de variaveis
let numeroSecreto = 29;

//Apresentacao do numero secreto no console 
console.log(numeroSecreto);

//Alerta com campo para digitação do usuario
let chute

while (chute != numeroSecreto) {

    chute = prompt('Escolha um número entre 1 e 30');

    //Realizando uma comparaçao entre o numero secreto e chute
    if (numeroSecreto == chute) {
        //Utilizaçao de (``) = Template String
        //Para realizar uma concatenaçao utiliza ($) + {VARIAVEL}
        alert(`Isso aí! Você descobriu o numero secreto ${numeroSecreto}`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}
