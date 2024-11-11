// Funções

// Precisa chamar
// Pode ou não receber parametros
// Pode ou não retornar Dados

//function gerarNome() {
//   const nome = "Eduardo"
//    const sobrenome = " Souza"
//   const idade = 40

//    console.log("Nome: ", nome + sobrenome )
//    console.log("Idade: ", idade)
//}

//gerarNome()


// Função passando parametro

//function gerarNome(nome, sobrenome, idade) {
//    console.log("Nome: ", nome + sobrenome )
//    console.log("Idade: ", idade)
//}

//gerarNome("Erasmo", " Kerbeg", 45)
//gerarNome("Nadia", " Kerbeg", 40)


// Função que retorna Dados

function gerarNome(nome, sobrenome) {
    return "Nome: " + nome + sobrenome
}
 //console.log(gerarNome("Erasmo", " Kerbeg"))   

 const nomeGerado = gerarNome("Nadia", " Kerbeg")
 console.log(nomeGerado)