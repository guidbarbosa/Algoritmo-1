/*escreval("Digite o nome do aluno: ")
      leia(nome)
      escreval("Digite a nota 01 do aluno: ")
      leia(nota1)
      escreval("Digite a nota 02 do aluno: ")
      leia(nota2)
      
      media <- (nota1 + nota2) / 2
      
      se media >= 5 entao
       escreval("Aprovado!" , nome)
      senao
       escreval("Reprovado" , nome)
       fimse
       
       escreva("a media do aluno foi: ", media)*/

    var nome, nota01, nota02;

    nome =prompt ("Digite o nome do aluno:")
    nota01 =prompt ("Digite a nota 1 do aluno:")
    nota02 =prompt ("Digite a nota 2 do aluno:") 

    media = (parseInt(nota01) + parseInt(nota02)) / 2

    if (media >= 5)
    alert("Parabéns, você foi Aprovado " + nome)

    else
        alert("Infelizmente, você foi Reprovado " + nome)