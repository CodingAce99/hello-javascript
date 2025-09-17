/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/* 
    Esto es un comentario
    en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

        let nombre = "Hector"
        let entero = 24
        let decimal = 0.5
        let booleano = true
        let no_definido
        let valor_nulo = null
        let simbolo = Symbol("miSimbolo")
        let entero_largo = BigInt(19865897163894716283352342654245179612983761289376129)

// 4. Imprime por consola el valor de todas las variables

    console.log(nombre)
    console.log(entero)
    console.log(decimal)
    console.log(booleano)
    console.log(no_definido)
    console.log(valor_nulo)
    console.log(simbolo)
    console.log(entero_largo)


// 5. Imprime por consola el tipo de todas las variables

    console.log(typeof nombre)
    console.log(typeof entero)
    console.log(typeof decimal)
    console.log(typeof booleano)
    console.log(typeof no_definido)
    console.log(typeof valor_nulo)
    console.log(typeof simbolo)
    console.log(typeof entero_largo)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    nombre = "Alma"
    entero = 23
    decimal = 0.3
    booleano = false
    no_definido = "definido"
    valor_nulo = "valor_no_nulo"
    simbolo = Symbol("otro_simbolo")
    entero_largo = 3974197491307419037498147930749817498172304n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    nombre = 25
    entero = "23"
    decimal = "0.3"
    booleano = "false"
    no_definido = 0.8
    valor_nulo = true
    simbolo = Symbol(34)
    entero_largo = null
    

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const myName = "Hector"
    const myInt = 28
    const myDec = 1.2
    const myBool = true
    const myUndefined = undefined
    const myNullValue = null
    const mySymbol = Symbol("miSimbolo")
    const myBigInt = BigInt(98134791830437398194719327417498132704931875957)

// 9. A continuación, modifica los valores de las constantes

    //myName = "Maria"
    //myInt = 40
    //myDec = 1.5
    //myBool = false
    //myUndefined = "defined"
    //myNullValue = "value"
    //mySymbol = Symbol("miOtroSimbolo")
    //myBigInt = BigInt(89680754987598179843798574290459872957290529047598257)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

    /*
    Las constantes de numeros primitivos no se pueden modificar, solo se pueden modificar
    los valores internos de un objeto o array
    */