/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

    let concatenacion = "Hola" + " Mundo!"
    console.log(concatenacion)

// 2. Muestra la longitud de una cadena de texto

    let myString = "Hola Mundo!"
    console.log(myString.length)

// 3. Muestra el primer y último carácter de un string

    console.log(myString[0])
    console.log(myString.slice(-1))

// 4. Convierte a mayúsculas y minúsculas un string

    console.log(myString.toUpperCase())
    console.log(myString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

    let texto = `Hola, aqui
    esta mi cadena de texto
    en varias lineas.`
    console.log(texto)

// 6. Interpola el valor de una variable en un string

    let variable1 = "admin123"
    console.log(`La contraseña es ${variable1}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

    console.log(myString.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log(myString.includes("Hola"))

// 9. Comprueba si dos strings son iguales

    let myString_2 = "Hola Mundo!"
    console.log(myString === myString_2)

// 10. Comprueba si dos strings tienen la misma longitud

    console.log(myString.length == myString_2.length)