var nomeArray = []
var senhaArray = []
var contador = 0


PerguntarDados()
console.log(nomeArray[contador] = nome)
console.log(senhaArray[contador] = senha)


function PerguntarDados(){
    nome = prompt(`Qual o seu nome de login`)
    senha = parseInt(prompt(`Qual a senha do login`))
    contador++
    return nome, senha
}