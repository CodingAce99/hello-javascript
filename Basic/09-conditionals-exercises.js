/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

    let nombre = "Hector"

    if (nombre == "Hector"){
        console.log(nombre)
    } else{
        console.log("la variable no contiene tu nombre")
    }

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

    let user = "admin"
    let pass = "123"

    if (user === "admin" && pass === "123"){
        console.log("login valido")
    } else ("login incorrecto")

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

    let num = 1

    if (num > 0){
        console.log("El numero es positivo")
    } else if (num === 0) {
        console.log("El numero es cero")
    } else if (num < 0) {
        console.log("El numero es negativo")
    }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

    let edad = 15

    if (edad >= 18) {
        console.log("La persona puede votar")
    } else {
        console.log("La persona no puede votar")
    }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

    let persona = (edad >= 18) ? "adulto" : "menor"

    console.log(persona)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

    let mes = 9

    if (mes >= 3 && mes <= 6) {
        console.log("primavera")
    } else if (mes > 6 && mes <= 9) {
        console.log("verano")
    } else if (mes > 9 && mes <= 11) {
        console.log("otoño")
    } else {
        console.log("invierno")
    }

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    if (mes === 2) {
        console.log("28 o 29 dias si es bisiesto")
    } else if ([4, 6, 9, 11].includes(mes)) {
        console.log("30 dias")
    } else {
        console.log("31 dias")
    }

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"   

switch (idioma) {
    case "español": 
        console.log("Hola")
        break
    case "inglés":
        console.log("Hello")
        break
    case "francés":
        console.log("Bonjour")
        break
    default:
        console.log("otro idioma")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

    switch (mes) {
        case 3: case 4: case 5:
            console.log("primavera")
            break
        case 6: case 7: case 8:
            console.log("verano")
            break
        case 9: case 10: case 11:
            console.log("otoño")
            break
        default:
            console.log("invierno")
    }

// 10. Usa un switch para hacer de nuevo el ejercicio 7

    switch (mes) {
        case 2:
            console.log("28 o 29")
            break
        case 4: case 6: case 9: case 11:
            console.log("30 dias")
            break
        default:
            console.log("31 dias")
    }