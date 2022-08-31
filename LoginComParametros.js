var nomeArray = []
var senhaArray = []
var contador = 0
var opcao = 0
var loginValido = false


while(opcao != 4){
opcao = VerificarInformações()
if(opcao == 1){
PerguntarDados()
console.log(nomeArray)
console.log(senhaArray)
}
else if(opcao == 2){
var nomeLogin = prompt(`Qual o seu nome`)
var senhaLogin = parseInt(prompt(`Qual a senha`))
if(FazerLogin(nomeLogin, senhaLogin)){
    console.log(`Login feito com sucesso!`)
}
else{
    console.log(`Dados incorretos, tente novamente!`)
}
}

else if(opcao == 3){
var nomeExcluir = prompt(`Qual nome deseja excluir`)
ExcluirCadastro(nomeExcluir)
}
}




function PerguntarDados() {
    nomeArray[contador] = prompt(`Qual o seu nome`)
    senhaArray[contador] = parseInt(prompt(`Qual a senha`))
    contador++
}

// function CadastrarNovamente(){
//     return prompt(`Deseja inserir novos dados? 1 - Sim/ 2 - Não`)
// }

function VerificarInformações() {
    return prompt(`O que deseja fazer? 1 - Cadastrar/2 - Fazer Login/ 3 - Excluir Cadastro/ 4 - Encerrar`)
    
}

function FazerLogin(nomeParametro, senhaParametro) {     
    for(var index = 0; index < contador; index++){
        if(nomeParametro == nomeArray[index] && senhaParametro == senhaArray[index]){
            return true
        }       
        else{
            return false
        }                
   }         
}

function ExcluirCadastro(excluir){
    for(var index = 0; index < contador; index++){
        if(excluir == nomeArray[index]){
            nomeArray[index] = 0
            senhaArray[index] = 0 
        }
    }
    for(var atual = 0; atual < contador - 1; atual++){
        for(var seguinte = atual + 1; seguinte < contador; seguinte++){
            if(nomeArray[atual] == 0){
                nomeArray[atual] = nomeArray[seguinte]
                nomeArray[seguinte] = 0
                senhaArray[atual] = senhaArray[seguinte]
                senhaArray[seguinte] = 0
            }
        }         
}
var nomeAux = []
var senhaAux = [] 
    for(var i = 0; i < contador; i++){
        if(nomeArray[i] != 0){
            nomeAux[i] = nomeArray[i]
            senhaAux[i] = senhaArray[i]
 }
}
        nomeArray = nomeAux
        senhaArray = senhaAux
        contador--
        console.log(nomeArray)
        console.log(senhaArray)
        
}
