/*
 nome:caractere
   numero:real
inicio
      escreval("Digite o seu nome: ")
      leia(nome)
      escreval("Digite o número: ")
      leia(numero)
      
      escreval (nome, " : ", numero, 15)
fimalgoritmo
*/

var nome, numero;

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero