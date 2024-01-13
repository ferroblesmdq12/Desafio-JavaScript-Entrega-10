// // Pedir la edad al usuario
// var edadUsuario = prompt("Por favor, ingresa tu edad:");

// // Convertir la entrada del usuario a un número
// var edadNumero = parseInt(edadUsuario);

// // Validar si la edad es mayor a 18 años
// if (edadNumero > 18) {
//     // Mostrar mensaje de bienvenida
//     alert("¡Bienvenido! Eres mayor de 18 años.");
// } else {
//     // Mostrar mensaje de error
//     alert("Lo siento, eres menor de 18 años. No puedes acceder.");
// }

// Funcion Validar Edad si es mayor de 18 años //
function validarEdad() {
    var edadInput = document.getElementById("edadInput").value;
    var mensajeDiv = document.getElementById("mensaje");

    if (edadInput === "") {
        mensajeDiv.innerHTML = "Por favor, ingresa tu edad.";
    } else {
        var edadNumero = parseInt(edadInput);

        if (edadNumero >= 18) {
            mensajeDiv.innerHTML = "¡Bienvenido! Eres mayor de 18 años.";
        } else {
            mensajeDiv.innerHTML = "Lo siento, eres menor de 18 años. No puedes acceder.";
        }
    }
}

