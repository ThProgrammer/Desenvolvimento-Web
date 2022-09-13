function contagem() {
    var res = document.querySelector("p#res")

    var inicio = document.querySelector("input#iniciocount").value
    var fim = document.querySelector("input#fimcount").value
    var passo = document.querySelector("input#passocount").value
    var contagem = ""; // variável que receberá a contagem em String

    // Validação de campos preenchidos:
    if (inicio.length != 0 && fim.length != 0 && passo.length != 0){

        //Conversão das variáveis Str -> Number:
        inicio = Number(inicio); fim = Number(fim); passo = Number(passo)

        //Validação de coerência da contagem:
        if (passo == 0) {
            window.alert("Passo Inválido! Considerando passo = 1..."); passo = 1;
        }

        //Contagem Regressiva:
        if (inicio > fim) {
            for (var i = inicio; i >= fim; i -= passo){
                contagem += `${i} 👉`
            }
        }

        //Contagem Progressiva:
        else {
            for (var i = inicio; i <= fim; i += passo) {
                contagem += `${i} 👉 `
            }
        }

    //Saída de dados:
        contagem += " 🏁"
        res.innerHTML = contagem
    }

    else {
        res.innerHTML = `<strong>Impossível Contar</strong>`
    }    
}
