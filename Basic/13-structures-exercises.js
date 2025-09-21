/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

    let myArray = ["perro", "gato", "elefante", "leon", "mono"]

// 2. Añade dos más. Uno al principio y otro al final

    myArray.push("tigre")
    myArray.push("tortuga")

// 3. Elimina el que se encuentra en tercera posición

    myArray.pop(3)
    console.log(myArray)

// 4. Crea un set que almacene cinco libros

    let mySet = new Set(["libro_1", "libro_2", "libro_3", "libro_4", "libro_5"])

// 5. Añade dos más. Uno de ellos repetido

    mySet.add("libro_6")
    mySet.add("libro_3")

// 6. Elimina uno concreto a tu elección

    mySet.delete("libro_4")
    console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

    let myMap = new Map([
        [1, "enero"],
        [2, "febrero"],
        [3, "marzo"],
        [4, "abril"],
        [5, "mayo"],
        [6, "junio"],
        [7, "julio"],
        [8, "agosto"],
        [9, "septiembre"],
        [10, "octubre"],
        [11, "noviembre"],
        [12, "diciembre"]
    ])

    console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

    console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

    let arrayVerano = ["junio", "julio", "agosto"]
    myMap.set("meses_verano", arrayVerano)
    console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
    let nuevoArray = ["Spain", "Italy", "France"]
    console.log(nuevoArray)

    let nuevoSet = new Set(nuevoArray)
    console.log(nuevoSet)

    let nuevoMap = new Map([
        ["nuevoSet", nuevoSet]
        ])

    console.log(nuevoMap)
    console.log(nuevoMap.get("nuevoSet"))