function tabuada() { //TENTAR FAZER COM UL LI ALGUMA HORA
    var num = document.querySelector("input#numero").value
    var tabuada = document.querySelector("select#tabuada")
    
    if (num.length != 0) {
        num = Number(num);
        tabuada.innerHTML = ""
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement("option") // Criar option
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tabuada${i}` // Coisa de Banco de dados, ainda não sei...
            tabuada.appendChild(item) // Colocando o option dentro do select
        }
    }

    else {
        window.alert("Por favor, insira um número.")
    }
}