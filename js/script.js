// Function para generar el número aleatorio 
const generarNumero = () => {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    return numeroAleatorio;
}

const botonEnviar = document.getElementById('btn-enviar');
const numeroGenerado = generarNumero();
let contador = 0;  // Introduje un contador para contar en cuantos intentos el usuario adivino el número

// Funcion que verifica y muestra los resultados
const mostrarDatos = () => {
    contador++;
    const numeroIntroducido = parseInt(document.getElementById('input-form').value);  //Accedemos al numero introducido en el input

    if (numeroIntroducido.length !== 0 && numeroIntroducido > 0 && numeroIntroducido <= 100) {
        if (numeroGenerado === numeroIntroducido) {
            alert(`Felicidades! Adivinaste el número ${numeroGenerado} correctamente \nLo adivinaste en ${contador} intentos`);
            alert('Si desea jugar de nuevo, recargue la página');
        } else if(numeroIntroducido > numeroGenerado) {
            alert(`El número ingresado ${numeroIntroducido} es mayor que el número mágico`);
        } else if (numeroIntroducido < numeroGenerado){
            alert(`El número ingresado ${numeroIntroducido} es menor que el número mágico`);
        }

    } else {
        alert('Por favor, ingrese un número correctamente entre 1 y 100');
    }
}

botonEnviar.addEventListener('click',mostrarDatos);