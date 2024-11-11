// Exercicio 2 - Estrutura de Decisão

// Percorrer uma lista de cidades
// contendo: ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"]
// Para cada item, verificar se a cidade de Florianópolis esta presente na lista
// Printar nome da Cidade
// Caso não seja o elemento procurado, avisar
// Número de execução

// Exemplo:
// Cidade: São Paulo
// Encontrado/Não Encontrado
// ---------------------



const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"]

cidades.forEach ((cidade,indice) => {
    console.log("Execução: ", indice +1)
    console.log("Cidade: ", cidade)

    if (cidade == "Recife"){
        console.log("Encontrado")
    }else {
        console.log("Não Encontrado")
    }

})