function contagem() {
    var res = document.querySelector("p#res")

    var inicio = document.querySelector("input#iniciocount").value
    var fim = document.querySelector("input#fimcount").value
    var passo = document.querySelector("input#passocount").value
    var contagem = "";

    // Validação de campos preenchidos:
    if (inicio.length != 0 && fim.length != 0 && passo.length != 0){

        //Conversão das variáveis Str -> Number:
        inicio = Number(inicio); fim = Number(fim); passo = Number(passo)

        //Validação de coerência da contagem:
        if (inicio > fim) {
            for (var i = inicio; i >= fim; i -= passo){
                contagem += `${i} 👉`
            }
        }

        else {
            for (var i = inicio; i <= fim; i += passo) {
                contagem += `${i} 👉`
            }
        }

        contagem += "🏁"
        res.innerHTML = contagem
    }

    else {
        res.innerHTML = `<strong>Impossível Contar</strong>`
    }    
}
