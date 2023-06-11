//constante del valor del ticket
const valorTicket=200

//defino de cuánto es el descuento según la categoría
let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

//capturamos los elementos en variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidadTickets = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

//Cálculo de total a pagar

//const totalAPagar = () => {
function totalAPagar(){
    if (nombre.value == "") {
        alert("Ingrese su nombre");
        nombre.focus();
        return;
    }

    if (apellido.value == "") {
        alert("Ingrese su apellido");
        apellido.focus();
        return;
    }

    if(mail.value == "") {
        alert("Ingrese su mail");
        mail.focus();
        return;
    }

    if (cantidadTickets.value == 0){
        alert("Ingresa la cantidad de tickets");
        cantidadTickets.focus();
        return;

    }

    if (categoria.value == "") {
        alert("Seleccione una categoría");
        categoria.focus();
        return;
    }

    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
//inserto el valor en el html
    totalPago.innerHTML = totalValorTickets;

    
}

btnResumen.addEventListener("click", totalAPagar);

const resetTotalPagar = () => {
    totalPago.innerHTML = "";

}

btnBorrar.addEventListener("click", resetTotalPagar);