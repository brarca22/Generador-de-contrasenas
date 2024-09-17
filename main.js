// Varque hacen referencia a los elementos de entrada y botón de la pagina
let cantidad = document.getElementById('cantidad'); 
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

// Cadena de caracteres que se usará para generar la contraseña
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Función para generar la contraseña
function generar() {

    // Convertir el valor de 'cantidad' a número 
    let numeroDigitado = parseInt(cantidad.value);

    // Verificar si el número de caracteres es < que 8
    if (numeroDigitado < 8) {
        alert('La Cantidad de caracteres tiene que ser mayor que 8');

    }

    let password = ''; // Variable para almacenar la contraseña generada

    // Bucle para generar la contraseña
    for( let i = 0; i < numeroDigitado; i++) {
        // Obtener un índice aleatorio dentro del rango de la cadena de caracteres
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio); // Mostrar el carácter aleatorio en la consola

        // Agregar el carácter aleatorio a la contraseña
        password += caracterAleatorio;
    }

    // boton de contraseña
    contrasena.value = password;

    //validar la fortaleza de la contraseña
    validarFortaleza(password);
    
}
//Funcion para limpiar la contraseña
function limpiar(){
    contrasena.value = '';
}

function validarFortaleza(password) {
    //ver si contiene al menos un numero
    let tieneNumero = /[0-9]/.test(password);
    //ver si contiene al menos una mayuscula
    let tieneMayuscula = /[A-Z]/.test(password);
    //ver si tiene un simbolo especial
    let tieneSimbolo = /[!@#$%^&*()]/.test(password);

    // Si la contraseña no cumple con lo que pedimos mostrar alertas
    if (!tieneNumero || !tieneMayuscula || !tieneSimbolo) {

        alert('La contraseña generada es débil. Debe contener al menos un número, una letra mayúscula y un símbolo especial.');

    } else {

        alert('La contraseña generada es fuerte.');
        
    }

}