/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente

    function safeDivide(a, b) {
        if(typeof a !== 'number' || typeof b !== 'number') {
            const err = new TypeError(`safeDivide: argumentos no son números (a=${a}, b=${b})`);
            return null;
        }
        if (b === 0) {
            const err = new TypeError('safeDivide: division por cero');
            console.error(err);
            return null;
        }
        return a / b;
    }

    safeDivide(10, 0);
    safeDivide('10', '2');

// 2. Crea una función que utilice warn correctamente

    let person1 = {
        name: 'Juan',
        age: 15
    }

    function verifyAge(person) {
        if(person.age < 18){
            console.warn("La persona es menor de edad");
        } else {
            console.log('La persona es adulta');
        }
    }

    verifyAge(person1);

// 3. Crea una función que utilice info correctamente

    let user1 = {
        name: 'John',
        age: 28,
        alias: 'dragonquest21'
    }

    function getAccountType(user){
        if(user.account === "pro") {
            console.info(`User "${user.alias}" has a pro account plan`);
        } else {
            console.info(`User "${user.alias}" has a basic account plan`);
        }
    }

    getAccountType(user1);

// 4. Utiliza table

    let data = [
        {name: "Joel", age: 25},
        {name: "Ana", age: 27},
        {name: "Gabriel", age: 14}
    ]

    console.table(data);

// 5. Utiliza group

    console.group("Usuario:")
    console.log("Nombre: Joel")
    console.log("Edad: 25")
    console.groupEnd()

// 6. Utiliza time

    console.time("Tiempo de ejecución")
    for(let i = 0; i< 10000; i++ ) {

    }
    console.timeEnd("Tiempo de ejecución")

// 7. Valida con assert si un número es positivo

    let num = -5

    console.assert(num >= 0, "El número debe ser positivo")

// 8. Utiliza count

    console.count("pulse")
    console.count("pulse")
    console.count("pulse")
    console.count("pulse")
    console.countReset("pulse")
    console.count("pulse")

// 9. Utiliza trace

    function A(){
        B()
    }

    function B(){
        C()
    }

    function C(){
        console.trace("Seguimiento de ejecución")
    }

    A()

// 10. Utiliza clear

    //console.clear()