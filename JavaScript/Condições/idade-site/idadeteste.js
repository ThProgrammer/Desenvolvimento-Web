function idade() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var idade = ano - Number(document.getElementById("ano_nascimento").value)

    var res = document.getElementById("result-box")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    var genero = document.getElementsByName("genero")
    // IMPORTANTE USAR NAME PQ É UMA CHECKBOX C OPÇÕES

    if (idade < 0 || document.getElementById("ano_nascimento").value.length == 0) {

        window.alert("Erro! Insira os dados novamente.")
    }

    else if (genero == "M") {
        res.innerHTML += `Detectamos um homem de ${idade} anos<br>`
        if (idade < 50) {
            
        }
        else {
             img.setAttribute("src", "arquivos/bolsonaro.jpg")
        }
    }
    else {
        res.innerHTML = `Detectamos uma mulher de ${idade} anos<br>`
    }

    // res.innerHTML += `<strong>${idade}</strong>`
}

