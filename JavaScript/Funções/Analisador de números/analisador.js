var input = document.querySelector("div#input-box")
var res = document.querySelector("p#res")
var valores = document.querySelector("select#valores")
var numeros = []

var resetbutton = document.createElement("input")
resetbutton.setAttribute("type", "submit"); resetbutton.setAttribute("value", "Resetar");
resetbutton.setAttribute("onclick", "reset()")

var botaoreset = document.querySelector("div.botao")


function adicionar() {
    var num = document.getElementById("numero").value

    //Validação de coerência e de elemento repetido
    if (num.length != 0 && numeros.indexOf(Number(num)) == -1 && Number(num) <= 100 && Number(num) >= 0) {
        num = Number(num);
        numeros.push(num)

        //Create option e adicionando:
        var valor = document.createElement("option")
        valor.text = `Valor adicionado: ${num}`
        valor.value = `element${numeros.indexOf(num)}`
        valores.appendChild(valor)
        
        // Limpeza do html e do botão reset
        res.innerHTML = ""
        botaoreset.innerHTML = ""
    }

    else {
        window.alert("Valor inválido ou já adicionado!")
    }

    //Ordenando o vetor
    numeros.sort()

    //Limpando a caixa de input:
    document.getElementById("numero").value = " "
    document.getElementById("numero").focus()
    
    
}

function analisar() {
    if (valores.length != 0 ) {
        
        var soma = 0

        var dados = ""
        dados += `<p>Foram cadastrados ${numeros.length} valores</p>` // Quantos valores cadastrados
        dados += `<p>Maior valor: ${numeros[(numeros.length)-1]}</p>` // Maior valor
        dados += `<p>Menor valor: ${numeros[0]}</p>` // Menor valor

        //Soma dos valores:
        for (let pos in numeros) {
            soma += numeros[pos]
        }
        dados += `<p> Soma dos valores: ${soma}</p>`

        //Média de todos os valores
        let media = soma/numeros.length
        dados += `<p> Média de todos os valores: ${media}</p>`

        res.innerHTML = dados
    }

    else {
        window.alert("Adicione valores antes de finalizar.")
    }
    botaoreset.appendChild(resetbutton)

}

function remover() {
    numeros.pop();
}

function reset () {
    while(numeros.length) {
        numeros.pop();
    }

    res.innerHTML = " "
    valores.innerHTML = ""
    botaoreset.innerHTML = " "
}


