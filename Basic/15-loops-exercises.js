/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

    for (let i = 0; i <= 20; i++ ) {
        console.log(i)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

    let sum = 0
    let j = 1

    do{
        sum += j
        j++
    } while(j <= 100)
    console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

    let num = 0 
    while (num <= 50) {
        if (num % 2 == 0) {
            console.log(num)
        }
        num++
    }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

    let names = ["Marta", "Laura", "Ana", "Aela", "Clara"]

    for (let i = 0; i <= names.length; i++) {
        console.log(names[i])
    }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

    let vocales = ["a", "e", "i", "o", "u"]
    let myString = "Hola Mundo!"
    let contador = 0

    for (let value of myString) {
        if(vocales.includes(value.toLowerCase())){
            console.log(value)
            contador++
        }
    }

    console.log("Numero de vocales:", contador);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

    let numbers = [1, 2, 3, 4, 5];
    let product = 1;

    for(let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }

    console.log(product);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

    // Mi versión:
    for(let i = 0; i <= 10; i++) {
        let operacion = 5 * i;
        console.log("5 x " + i + " = " +  operacion);
    }

    // Versión moderna:
    for(let i = 0; i <= 10; i++) {
        console.log(`5 x ${i} = ${5 * i}`);
    }

// 8. Usa un bucle para invertir una cadena de texto

    let string = "Hola Mundo!"
    let nuevoString = ""

    for(let i = 0; i < string.length; i++) {
        nuevoString = string[i] + nuevoString
    }

    console.log(nuevoString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

    let a = 0;
    let b = 1;
    for(let i = 0; i <= 10; i++) {
        console.log(a);
        let sucesion = a + b;
        a = b;
        b = sucesion;
    }

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

    let numeros = [7, 23, 8, 45, 50, 6, 73, 80];
    let newArray = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            newArray.push(numeros[i]);
        }
    }

    console.log(newArray);