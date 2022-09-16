let nomes = []
let senhas = []
let continuar = true

do {

let opcao = EscolherFuncao()

switch (opcao) {
    case "1":
        CadastrarUsuario()
    break;

    case "2":
        console.log(`Você escolheu login!`)
        let nome = prompt(`Digite o nome para login`)
        let senha = parseInt(prompt(`Digite a senha do login`))
        if((FazerLogin(nome, senha))){
            console.log(`Login feito com sucesso!`)
        }
        else{
            console.log(`Nome ou senha incorretos!`)
        }
    break;

    case "3":
        console.log(`Você escolheu excluir`)
        let nomeExcluir = prompt(`Digite o nome para excluir`)
        ExluirCadastro(nomeExcluir)
    break;
    
    case "4":
        console.log(`Você escolheu encerrar`)
        continuar = false
    break;
    default:
        console.log(`Opção não existe, tente novamente!`)
    break;
}

} while(continuar)


function CadastrarUsuario(){
    nomes.push(prompt(`Qual o seu nome`))
    senhas.push(parseInt(prompt(`Qual a sua senha`)))
    console.log(nomes, senhas)
}

function EscolherFuncao(){
    return prompt(`1-Cadastrar/2-Fazer Login/3-Excluir Cadastro/4-Encerrar Programa`)
    
}

function FazerLogin(nomeParametro, senhaParametro){
    let verificaoNomes = nomes.includes(nomeParametro)
    let verificaoSenhas = senhas.includes(senhaParametro)
    if(verificaoNomes && verificaoSenhas){
        return true
    }
    else{
        return false
    }

}

function ExluirCadastro(nomeParametro){
    let nomesAux = nomes.filter(nome => nome != nomeParametro)
    let senhasAux = senhas.filter((senha, index) => {
        if(nomes[index] != nomeParametro){
            return senha
        }
    })
    nomes = nomesAux
    senhas = senhasAux

    console.log(nomes, senhas)
}