/*var frase = prompt("Ingrese la frase o palabra: ");

function palindromo(fra) {
    // Convierto la cadena a minúscula
    var minuscula = fra.toLowerCase();
    console.log(minuscula);
    // Convierto la cadena en un array
    var convertirArray = minuscula.split("");
    console.log(convertirArray);
    // Elimino los espacios del array
    var sinEspacios = "";
    for (i in convertirArray) {
        if (convertirArray[i] != " ") {
            sinEspacios += convertirArray[i];
        }
    }
    console.log(sinEspacios);
    // Vuelvo a convertir en array
	var nuevoArray = sinEspacios.split("");
	var alReves = sinEspacios.split("").reverse();
    console.log(alReves);
    // Verifico sin son iguales
    flag = true;
    for (i = 0; i < nuevoArray.length; i++) {
        if (nuevoArray[i] != alReves[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
        return ("La cadena es un palíndromo.");
    } else {
        return ("La cadena NO es un palíndromo.");
    }
};

console.log(palindromo(frase));
*/
var frase = prompt("Ingrese la frase o palabra: ");

function palindromo(fra) {
    // Convierto la cadena a minúscula
    var minuscula = fra.toLowerCase();
    // Convierto la cadena en un array
    var convertirArray = minuscula.split("");
    // Elimino los espacios del array
    var sinEspacios = "";
    for (i in convertirArray) {
        if (convertirArray[i] != " ") {
            sinEspacios += convertirArray[i];
        }
    }
    console.log(sinEspacios);
    // Vuelvo a convertir en array
	var nuevoArray = sinEspacios.split("");
	var alReves = sinEspacios.split("").reverse();
    // Verifico sin son iguales
    flag = true;
    for (i = 0; i < nuevoArray.length; i++) {
        if (nuevoArray[i] != alReves[i]) {
            flag = false;
            break;
        };
    };
    if (flag) {
        return ("La cadena es un palíndromo.");
    } else {
        return ("La cadena NO es un palíndromo.");
    }
};

console.log(palindromo(frase));
