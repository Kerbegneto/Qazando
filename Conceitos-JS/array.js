const paises =["Brasil", "Argentina","Alemanha"] //lista de dados

console.log("Acessando o País: " + paises[0])  //acessando uma posição do array
console.log("Tamanho do array: " + paises.length) //tamanho do array

// Operações com array

paises.push("USA")   // Adiciona um elemento no final do array
console.log(paises)
paises.pop()    //remove ultimo elemento do array
console.log(paises)
paises.unshift("Belgica")  //Adiciona um elemento no inicio do array
console.log(paises)
paises.shift()   // apaga um elemento no inicio do array
console.log(paises)