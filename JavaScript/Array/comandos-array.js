var num = [5, 8, 4]
num[3] = 6 
num.push(7) // Adiciona ao último elemento o valor ()
num.length // Comprimento do vetor
num.sort() // Ordena o vetor

// array.indexOf() = acha o índice do elemento
// array.shift() = deleta o primeiro item
// array.splice() = deleta item de índice específico

for (let index = 0; index < num.length; index++) {
    console.log(num[index])
}

// Encontrando a posição do elemento | Se não encontrado, retorna -1
console.log("Posição: " + num.indexOf(9)+"\n-")
num.shift()


// Vetor após shift()
for (let index = 0; index < num.length; index++) {
    console.log(num[index])
}


num.splice(num.indexOf(8))
console.log("-")
// Vetor após splice()
for (let index = 0; index < num.length; index++) {
    console.log(num[index])
}

// for in: para cada posição (pos) em num, exibir num[pos]

for (var pos in num) {
    console.log(num[pos])
}