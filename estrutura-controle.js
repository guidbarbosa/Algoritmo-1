
    var nome, nota01, nota02;

    nome =prompt ("Digite o nome do aluno:")
    nota01 =prompt ("Digite a nota 1 do aluno:")
    nota02 =prompt ("Digite a nota 2 do aluno:") 

    media = (parseInt(nota01) + parseInt(nota02)) / 2

    if (media >= 5)
    alert("Parabéns, você foi Aprovado " + nome)

    else
        alert("Infelizmente, você foi Reprovado " + nome)