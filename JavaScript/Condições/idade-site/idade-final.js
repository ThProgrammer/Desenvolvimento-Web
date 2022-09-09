function idade() {
// VARIÁVEIS
    var agora = new Date(); var ano = agora.getFullYear()
    var ano_nasc = Number(document.querySelector("#ano_nascimento").value);
    var res = document.querySelector("#result-box")
    
    
// PROCESSAMENTO

    if (document.querySelector("#ano_nascimento").value.length == 0 || ano_nasc > 2022){
        window.alert("ERRO! Verifique os dados e tente novamente.")
    }
    else {
        var idade = ano - ano_nasc;
        var gen = document.getElementsByName("genero") // Todos os elementos com name "genero", como se fosse um vetor
        var fetaria;
        var img = document.createElement("img")
        img.setAttribute("id", "img")
        img.setAttribute("width", "250px")

        if (gen[0].checked) {

            if (idade < 10) {
                // CRIANÇA
                fetaria = "menino"
                img.src ="https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg"
            }

            else if (idade < 18) {
                // ADOLESCENTE
                fetaria = "garoto"
                img.src = "https://media.istockphoto.com/photos/confidence-building-in-children-is-important-picture-id1210026936?s=612x612"
            }

            else if (idade < 55) {
                // JOVEM
                fetaria = "homem"
                if (idade > 30) {
                    // ADULTO
                    // imagem adulto aqui
                    img.src = "https://media.istockphoto.com/photos/living-that-urban-life-picture-id1165314750?k=20&m=1165314750&s=612x612&w=0&h=QcN0aTHS8IpSbNEnSU9Vno8vUjCEFQs4gbZ72dG6yvM="
                }
                else {
                    img.src = "https://media.istockphoto.com/photos/positive-african-american-teen-student-with-backpack-tablet-pc-and-picture-id1339432131?k=20&m=1339432131&s=612x612&w=0&h=K63T7bjvLLen4a1z-QYqCLEscVrRGH854sqkhTmqEVY="
                }
            }

            else {
                // IDOSO
                fetaria = "idoso"
                img.src = "https://media.istockphoto.com/photos/senior-man-working-out-for-good-health-picture-id1135152361?s=612x612"
            }
            res.innerHTML = `Detectamos um ${fetaria} de ${idade} anos`
            res.appendChild(img) 
            // AQUIIIII, FINALMENTE FUNCIONOOOU! COLOCOU A IMAGEEEEEEEEEEEEEEEEEEEEEEEEEM
            // APRENDIZADO: Escolher imagem que carrega, criar tag img com createElement, e adicionar a div com *elemento.*appendChild(var)*

        }

        else if (gen[1].checked) {

            if (idade < 10) {
                // CRIANÇA
                fetaria = "menina"
            }

            else if (idade < 18) {
                // ADOLESCENTE
                fetaria = "garota"
            }

            else if (idade < 55) {
                // JOVEM
                fetaria = "mulher"
                if (idade > 30) {
                    fetaria = "!mulher > 30"
                    // ADULTO
                    // imagem adulto aqui
                }
            }

            else {
                // IDOSO
                fetaria = "idosa"
            }
            res.innerHTML = `Detectamos uma ${fetaria} de ${idade} anos`
        }
        
        
        // res.innerHTML = `Idade calculada ${idade} anos`
    }
}