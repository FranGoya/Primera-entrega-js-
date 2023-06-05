let balance = 1000; 
function mostrarMenu() {
    console.log("Bienvenido al Cajero Automático");
    console.log("1. Ver saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");
}

function verSaldo() {
    alert("Tu saldo actual es: $" + balance);
}

function retirarDinero() {
    let cantidadRetiro = parseFloat(prompt("Ingresa la cantidad a retirar:"));

    if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
        alert ("Cantidad de retiro inválida.");
        return;
    }

    if (cantidadRetiro > balance) {
        alert("Fondos insuficientes");
    } else {
        balance -= cantidadRetiro;
        alert("Retiraste $" + cantidadRetiro);
        alert("Tu saldo actual es: $" + balance);
    }
}

function depositarDinero() {
    let cantidadDeposito = parseFloat(prompt("Ingresa la cantidad a depositar:"));

    if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
        alert("Cantidad de depósito inválida.");
        return;
    }

    balance += cantidadDeposito;
    alert("Depositaste $" + cantidadDeposito);
    alert("Tu saldo actual es: $" + balance);
}

function iniciarCajero() {
    let opcion = 0;

    while (opcion !== 4) {
        mostrarMenu();
        opcion = parseInt(prompt("1.ver saldo, 2.retirar dinero 3.depositar dinero"));

        switch (opcion) {
            case 1:
                verSaldo();
                break;
            case 2:
                retirarDinero();
                break;
            case 3:
                depositarDinero();
                break;
            case 4:
                alert("Gracias por usar el Cajero Automático. ¡Hasta luego!");
                break;
            default:
                alert("Opción inválida. Por favor, selecciona una opción válida.");
        }
    }
}

// Ejecutar el simulador del cajero automático
iniciarCajero();