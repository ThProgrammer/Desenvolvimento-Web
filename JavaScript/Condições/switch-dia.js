var agora = new Date()
var ndia = agora.getDay()
var hora = agora.getHours()
var mins = agora.getUTCMinutes()

var dia;
var periodo;

if (hora <= 11) { periodo = "manhã" }
else if (hora <= 17) { periodo = "tarde"}
else { periodo = "noite"}

switch (ndia) {
    case 0:
        dia = "Domingo"
        break;
    case 1:
        dia = "Segunda-Feira"
        break;
    case 2:
        dia = "Terça-Feira"
        break;
    case 3:
        dia = "Quarta-Feira"
        break;
    case 4:
        dia = "Quinta-Feira"
        break;
    case 5:
        dia = "Sexta-Feira"
        break;
    case 6:
        dia = "Sábado"
        break;
}
console.log(`Hoje é ${dia}, ${hora}:${mins} da ${periodo}`)