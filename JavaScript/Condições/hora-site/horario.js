function hora() {
    var msg = document.getElementById("input-box"); 
    var img = document.querySelector("#imagem");
    var agora = new Date(); var horario = agora.getHours();

    msg.innerHTML = `Agora são <strong>${horario}</strong> horas.`;
    var background = document.body;

    if (horario < 12) {
        // BOM DIA
        background.style.background = "#edc29f"
        img.src ="https://blog.pajaris.com.br/wp-content/uploads/2021/06/oracao-da-manha-1.jpg"
    }

    else if (horario >= 12 && horario < 18) {
        //BOA TARDE
        background.style.background = "#b9846f"
        img.src ="https://ditados.com.br/wp-content/uploads/2020/02/shutterstock_107324681.jpg"
    }

    else {
        //BOA NOITE
        background.style.background = "#515154"
        img.src = "https://agenciabrasil.ebc.com.br/sites/default/files/atoms/image/926212-super%20lua_1.jpg"
    }
}