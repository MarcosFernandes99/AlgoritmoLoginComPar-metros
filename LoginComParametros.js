var nomeArray = []
var senhaArray = []
var contador = 0


PerguntarDados()
console.log(nomeArray[contador] = nome)
console.log(senhaArray[contador] = senha)

VerificarInformações()






function PerguntarDados(){
    nome = prompt(`Qual o seu nome de login`)
    senha = parseInt(prompt(`Qual a senha do login`))
    contador++
    return nome, senha
}


function VerificarInformações(){
    opcao = prompt (`O que deseja fazer? 1 - Cadastrar/2 - Fazer Login/ 3 - Excluir Cadastro/ 4 - Encerrar`)
    return opcao
}

