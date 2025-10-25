/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

console.log("\n Ejercicio 1... \n")

let Object_1;

try {
    // Este codigo se intenta ejecutar
    console.log(Object_1.name);
} catch {
    // Bloque de error
    console.log("Se ha producido un error");
}

// 2. Captura una excepción utilizando try-catch y finally

console.log("\n Ejercicio 2... \n")

let Object_2;

try {
    // Este codigo se intenta ejecutar
    console.log(Object_2.name);
} catch {
    // Bloque de error
    console.log("Se ha producido un error");
} finally {
    console.log("Este codigo se ejecuta siempre");
}

// 3. Lanza una excepción genérica

console.log("\n Ejercicio 3... \n")

//throw new Error("Se ha producido un error");

// 4. Crea una excepción personalizada

class AgeValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AgeValidationError";
    }
}

function validateAge(age) {
    if (age < 18) {
        throw new AgeValidationError("La edad debe ser mayor o igual a 18")
    }
    console.log("Edad válida.");
}

// 5. Lanza una excepción personalizada

console.log("\n Ejercicio 5... \n")

try {
    validateAge(16);
    validateAge(13);
    validateAge(21)
} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
}

// 6. Lanza varias excepciones según una lógica definida

console.log("\n Ejercicio 6... \n")

class EmailValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "EmailValidationError";
    }
}

function validateUser(age, email) {
    if (age < 18) {
        throw new AgeValidationError("La edad debe ser mayor o igual a 18")
    }
    if (!email.includes("@")) {
        throw new EmailValidationError("El correo electrónico no es válido")
    }
    console.log("Usuario válido")
}

try {
    validateUser(16, "usuario.com") // Lanza AgeValidationError
} catch (error) {
    console.log(`Error: ${error.name} - ${error.message}`);
}

// 7. Captura varias excepciones en un mismo try-catch

console.log("\n Ejercicio 7... \n")

try {
    validateUser(16, "usuario.com")
} catch (error) {
    if (error instanceof AgeValidationError) {
        console.log(`Error de edad: ${error.message}`);
    } else if (error instanceof EmailValidationError) {
        console.log(`Error de correo: ${error.message}`);
    } else {
        console.log("Error desconocido:", error);
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

console.log("\n Ejercicio 8... \n")

let values = ['3.14', '2.5', '3.5', 'abc', null, '1.234,56']

for (let value of values) {
    try {
        let floatValue = parseFloat(value)
        if (isNaN(floatValue)) {
            throw new Error(`"${value}" no es un numero valido`)
        }
        console.log(`Valor transformado: ${floatValue}`)
    } catch (error) {
        console.log("Error:" + error.message)
    }
}


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

console.log("\n Ejercicio 9... \n")

const user1 = {
    nombre: "Juan",
    edad: 25,
    email: "juan@email.com",
    profesion: "developer",
}

class PropertyValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "PropertyValidationError";
    }
}

function validateProperty(object, property) {
    if (object === null || object === undefined) {
        throw new PropertyValidationError("El objeto es null o undefined");
    }

    if (Object.hasOwn(object, property)) {
        console.log(`La propiedad "${property}" existe y su valor es:`, object[property])
        return true;
    } else {
        console.log(`La propiedad "${property}" no existe en el objeto`);
        return false;
    }
}

try {
    validateProperty(user1, "nombre")
    validateProperty(user1, "email")
    validateProperty(user1, "profesion")
} catch (error) {
    console.error("Error:", error.message)
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

    console.log("\n Ejercicio 10... \n")

    function intentarOperacion(fn, maxIntentos = 10) {
        let intentos = 0;
        while (intentos < maxIntentos) {
            try {
                // Intenta ejecutar la función
                const resultado = fn();
                console.log(resultado); // Muestra el resultado exitoso
                return resultado; // Sale de la función cuando hay éxito
            } catch (error) {
                intentos++;
                console.warn(`Intento ${intentos} fallido: ${error.message}`);
                if (intentos === maxIntentos) {
                    throw new Error(`La operación falló tras ${maxIntentos} intentos.`);
                }
            }
        }
        throw new Error(`La operación falló tras ${maxIntentos} intentos.`)

    }

    // Función que puede fallar
    function operacionAleatoria() {
        if (Math.random() < 0.7) { // 70% de probabilidad de fallar
            throw new Error("Error aleatorio");
        }
        return "¡Operación exitosa!"
    }

    // Uso del patrón de reintentos
    try {
        const resultado = intentarOperacion(operacionAleatoria, 10)
        console.log(resultado);
    } catch (error) {
        console.error("Error final:", error.message);
    }