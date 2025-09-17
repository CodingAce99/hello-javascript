/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

    let suma = 2 + 2
    let resta = 4 - 1
    let multiplicacion = 2 * 2
    let division = 10 / 2
    let modulo = 10 % 2
    let exponente = 10 ** 2

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let number = 10

    number += suma
    number -= resta
    number *= multiplicacion
    number /= division
    number %= modulo


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    console.log(4 > 2)
    console.log(3 < 6)
    console.log(5 != 10)
    console.log(10 == "10")
    console.log(4 === 4)



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log(2 != "2")
    console.log(5 === "5")
    console.log(7 >= 10)
    console.log(4 == 8)
    console.log(2 > 5)

// 5. Utiliza el operador lógico and

    console.log(2 > 1 && 3 < 6)
    
    /*
    AND:
    True + True = True
    True + False = False
    False + False = False 
    */

// 6. Utiliza el operador lógico or

    console.log(4 > 5 || 2 > 1)

    /*
    OR:
    True + True = False
    True + False = True
    False + False = False
    */


// 7. Combina ambos operadores lógicos

    console.log(10 > 5 && 2 >= 2) || (5 > 3 && 3 < 1)

// 8. Añade alguna negación

    console.log(10 > 5 && 2 != 2) || (5 > 3 && 3 < 1)

// 9. Utiliza el operador ternario

    let notaMin = 5
    let aprobar= (notaMin >= 5)? "Esta aprobado" : "Esta suspendido"
    console.log(aprobar)

// 10. Combina operadores aritméticos, de comparáción y lógicas

    let operacion = (2 + 2) - (5 % 2) > 10 || (3 * 2) == "6"
    console.log(operacion)