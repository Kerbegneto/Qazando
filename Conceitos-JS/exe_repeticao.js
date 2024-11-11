//Exercicio 1 - Estrutura de repetição

//Percorrer uma lista de nomes, contendo os nomes:
//Eduardo, Maria, Fernando, João e Francisco
//Número da execução começando em 1
//Nome que esta sendo executado
//Separadores

//exemplo da resposta
//Execução: 1
//Nome: Eduardo
//----------------

const nomes = ["Eduardo", "Maria", "Fernando", "João", "Francisco"] 

nomes.forEach((nome, indice) => {
    console.log("Execução: ", indice +1)
    console.log("Nome: " + nome)
    console.log("---------------")
})