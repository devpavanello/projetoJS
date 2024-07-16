//Alerta ao recarregar uma página
alert('Boas vindas ao jogo do número secreto!');

//Criação de variaveis
let numeroSecreto = 29;

//Alerta com campo para digitação do usuario
let chute = prompt('Escolha um número entre 1 e 30');

if (numeroSecreto == chute){
    console.log('Isso aí! Você descobriu o numero secreto (5)');
}