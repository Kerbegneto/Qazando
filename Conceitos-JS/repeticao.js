// repetição por array

// array.forEach(element => {
// })

const cidades = ["São Paulo", "Rio de Janeiro", "Florianópolis", "Recife"]

cidades.forEach((_elemento, indice) => {
    console.log("Execução número: " + indice)
    console.log(_elemento)
})

// for normal
// for(let indice = 0; indice < 10; indice++){}

for(let indice = 0; indice < cidades.length; indice++){
    console.log(cidades[indice])
}