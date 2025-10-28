/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función

    export function myfunction() {}

// 2. Exporta una constante

    export const myConst = 0;

// 3. Exporta una clase

    export class Vehicle {
        constructor(type){
            this.type = type
        }
    }

// 4. Importa una función
import { add } from "./28-export-modules.js";

// 5. Importa una constante
import { PI } from "./28-export-modules.js";

// 6. Importa una clase
import { Circle } from "./28-export-modules.js";

// Uso de los elementos importados
console.log(add(2, 3));
console.log(PI);
const circle = new Circle(5);
console.log(circle.area());

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

    // No: en un módulo ES (ECMAScript modules) solo puede haber UN solo export default. 
    // No se puede tener varias exportaciones por defecto en el mismo archivo.

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)

    // No, no se puede importar una función, una constante y una clase como "default" al mismo
    // tiempo desde un módulo. Solo puede haber un único export default por módulo.

// 9. Exporta una función, una constante y una clase desde una carpeta
// Se creó la carpeta 'exports' con los archivos necesarios.

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { myFunction, myConstant, MyClass } from '../Basic/exports/index.js';

// Uso de los elementos importados
myFunction();
console.log(myConstant);
const instance = new MyClass();

