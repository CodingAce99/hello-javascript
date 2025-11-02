/*
Clase 12 - Funciones avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4112
*/

// 1. Crea una función que retorne a otra función

const ejecutar = function (programa) {
    console.log(`Se esta ejecutando ${programa}`)
}

ejecutar("VS Code")

// 2. Implementa una función currificada que multiplique 3 números

function curriedProduct(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}
console.log("Función currificada: " + curriedProduct(2)(2)(2))


// Versión compacta
const curriedProduct2 = a => b => c => a * b * c
console.log("Función currificada compacta: " + curriedProduct2(2)(2)(2))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function calcularPotencia(base, exp) {
    if (exp === 0) {
        return 1;
    }

    return base * calcularPotencia(base, exp - 1)
}

console.log("Calcular potencia: " + calcularPotencia(3, 3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(value) {

    return {
        increment() {
            value += 1;
        },
        decrement() {
            value -= 1;
        },
        getValue() {
            return value;
        }
    };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
console.log("Obtener valor incrementado: " + counter.getValue());
counter.decrement();
console.log("Obtener valor decrementado: " + counter.getValue());


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let result = 0;
    for (number of numbers) {
        result += number;
    }
    return result *= multiplier;
}

console.log("Función sumManyTimes(): " + sumManyTimes(2, 1, 2, 3, 4, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

function sumAll(data, callback) {
    const result = sum(...data)
    callback(result)
}

function showResult(result) {
    console.log(`El resultado de sumAll() es: ${result}`)
}

sumAll([3, 3, 3], showResult)

// 7. Desarrolla una función parcial

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

console.log("El resultado de la función parcial es: " + partialSum(2)(4, 2))

// 8. Implementa un ejemplo que haga uso de Spread

let persona = { nombre: "Maria", edad: 21 };
let direccion = { ciudad: "Barcelona", pais: "España"};

const perfil = { ...persona, ...direccion };
console.log("Ejemplo de uso de Spread: ")
console.log(perfil);

// 9. Implementa un retorno implícito

    const dividir = (a, b) => a / b;

    console.log(dividir(10, 2))

// 10. Haz uso del this léxico

    const user = {
        nombre: "user123",
        login: function() {
            setTimeout(() => {
                console.log(this.nombre + " is logged in");
            }, 1000);
        }
    }

    user.login();