/* function parimpar (n) {
    if (n % 2 == 0) {
        return "par"
    }
    else {
        return "impar"
    }
}

console.log(parimpar(223))*/

// Colocando paramentros opcionais: pam = 0
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5, 3))

//Colocando função na variável:

var dobro = function(n) {
    return n*2
}

console.log(dobro(5))

var fatorial = function (f) {
    let fat = f
    for (var i = 1; i < f; i++) {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))

//Função recursiva:

function fator(n) {
    if (n == 1) {
        return 1
    }

    else {
        return n*fator(n-1) //Matematicamente o fatorial de um número é n x (n-1)!
        // Então usamos a função recursivamente, chamamos e chamamos como se fosse um paradoxo.
    }
}

console.log(fator(4))

// ESTUDAR ARROW FUNCTION!!!!!!!!!!