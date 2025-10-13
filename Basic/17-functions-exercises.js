/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

    function sum(a, b) {
        return a + b;
    }

    console.log(sum(2, 2))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

    let myArray1 = [1, 2, 3, 4, 5, 6];

    function ejercicio2() {
        let num = 0
        myArray1.forEach(function(value){
            if(value > num){
                num = value
            }
        })
        return num
    }

    console.log(ejercicio2())

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

    function ejercicio3(texto) {
        let vocales = 0
        const listaVocales = "aeiouáéíóúAEIOUÁÉÍÓÚ"

        for(let letra of texto) {
            if(listaVocales.includes(letra)){
                vocales++
            }
        }

        return vocales
    }

    let myString = "Hola Mundo!"
    console.log(ejercicio3(myString))


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

    let strings = ["Hola Mundo!", "Hi Friend", "Money isn`t real"]

    function ejercicio4(array) {
        string.forEach
    }

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

    function esPrimo(num) {
        if (num <= 1) return false; // 0, 1 y negativos no son primos

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; // Si es divisible por algún número, no es primo
            }
        }

        return true; // Si no fuese divisible por ninguno, es primo
    }

    console.log(esPrimo(2));
    console.log(esPrimo(4));
    console.log(esPrimo(13));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

    myArray1 = [1, 2, 3, 4, 5, 6];
    let myArray2 = [0, 2, 4, 6, 8, 10];

    function commonElements(array1, array2) {
        let nuevoArray = [];

        array1.forEach(function(value){
            if (array2.includes(value)) {
                nuevoArray.push(value)
            }
        });

        return nuevoArray;
    }

    console.log(commonElements(myArray1, myArray2));


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

    function sumarPares(array){
        let suma = 0;
        array.forEach(function(value){
            if (value % 2 == 0){
                suma += value;
            }
        })

        return suma;
    }

    console.log(sumarPares(myArray1));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

    function elevarCuadrado(array){
        let nuevoArray = [];

        array.forEach(function(value){
            nuevoArray.push(value**2);
        })

        return nuevoArray;
    }

    console.log(elevarCuadrado(myArray1));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

    function invertirString(string){
        return string.split(" ").reverse().join(" ");
    }

    console.log(invertirString("Hola Mundo!"));

// 10. Crea una función que calcule el factorial de un número dado

    function calcularFactorial(n) {
        if (n < 0) return undefined; // no existe factorial para negativos
        let resultado = 1;
        for(let i = 1; i <= n; i++){
            resultado *= i;
        }

        return resultado;
    }

    console.log(calcularFactorial(5)); // 120