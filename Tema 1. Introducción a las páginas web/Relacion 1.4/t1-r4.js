/*1. Función llamada suma que puede tomar cualquier número de argumentos y
devuelve la suma de todos los argumentos*/
function sum(...args) {
    //args.reduce es una función de los arrays que permite acumular los valores a un único valor
    return args.reduce((acumulador, valorNuevo) => acumulador + valorNuevo, 0);/*Cero en caso de que no se introduzca ningún argumento*/
}

function probarSum() {
    let resultado = sum(10, 20, 30, 40); //100
    alert("El resultado de la suma es: " + resultado);
}

/*2. Función llamada addOnlyNums que puede aceptar cualquier número de
argumentos (incluidos números o cadenas) y devuelve solo la suma de los
números*/
function addOnlyNums(...args) {
    //arg => typeof arg === 'number': Crea un array en el que solo incluye los elementos que sean de tipo número
    return args.filter(arg => typeof arg === 'number').reduce((acumulador, valorNuevo) => acumulador + valorNuevo, 0);
}

function probarAddOnlyNums() {
    let resultado2 = addOnlyNums('gato', 'perro', 54, 4); //58
    alert("(AddOnlyNums)El resultado es: " + resultado2);
}

/*3. Función llamada countTheArgs que pueda tomar cualquier número de
argumentos y devuelva el número de argumentos que se pasan.*/
function countTheArgs(...args) {
    return args.length;
}

function probarCountTheArgs() {
    let resultado3 = countTheArgs(1, 'cuchara', 'coche', 76, 2); //5
    alert("(countTheArgs)El resultado es: " + resultado3);
}

/*4. Función llamada combineTwoArrays que toma dos arrays como
argumentos y devuelve una única array que combina ambas (usando el operador
de propagación).*/
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

function probarcombineTwoArrays() {
    let array1 = [1, 2, 3, 4];
    let array2 = [2, 4, 6, 8];
    let resultado = combineTwoArrays(array1, array2);

    alert("(combineTwoArrays)El resultado de combinar array1 con array2 es: " + resultado);
}

/*5. Función llamada sumEveryOther que acepte cualquier cantidad de argumentos y devuelva la suma de las
posiciones impares del array*/
function sumEveryOther(...args) {
    let suma = 0;
    for (let i = 0; i < args.length; i += 2) {
        suma += args[i];
    }
    return suma;
}

function probarSumEveryOther() {
    let array = [0, 5, 10, 15, 20] //0+10+20: 30
    //Usamos ... para pasar los elementos del array como argumentos individuales
    let sumImpares = sumEveryOther(...array);

    alert("(sumEveryOther)La suma de las posiciones impares son: " + sumImpares);
}

//6. Función divisible que devuelva si un número es divisible por 3
function divisorDeTres(numero) {
    return numero % 3 === 0;
}

function probarDivisorDeTres() {
    let num1 = 33;
    let divisor = divisorDeTres(num1)
    alert("¿Es el número 33 divisor de 3?: " + divisor); //True
}

//7. Función divisibleEntre que devuelva si un número es divisible por otro número, recibirá dos argumentos
function divisibleEntre(numero, divisor) {
    return numero % divisor === 0;
}

function pruebaDivisibleEntre() {
    let num1 = 37;
    let num2 = 2;
    let divisible = divisibleEntre(num1, num2);
    alert("¿Es el número 37 divisible entre 2?: " + divisible); //False
}

//8. Función rango (valor, rangoInf, rangoSup) que compruebe si dos números dados están entre un rango determinado
function rango(valor, rangoInf, rangoSup) {
    return valor >= rangoInf && valor <= rangoSup;
}

function probarRango() {
    let numValor = 56;
    let numRangoInf = 45;
    let numRangoSup = 60;
    let compruebaRango = rango(numValor, numRangoInf, numRangoSup);

    alert("¿Esta el número 56 entre 45-60?: " + compruebaRango); //True
}

//9. Función tieneTresDigitos que compruebe si un número dado tiene 3 dígitos y devuelva si o no
function tieneTresDigitos(num) {
    //Math.abs es el valor absoluto, por si el usuario introduce un número negativo
    if(Math.abs(num) >= 100 && Math.abs(num) <= 999) {
        return "Tiene tres dígitos"
    } else {
        return "No tiene tres dígitos"
    }
}

function pruebaTieneTresDigitos() {
    let numeros = -67;
    let compruebaDigitos = tieneTresDigitos(numeros);

    alert("¿El valor -67 tiene tres dígitos?: " + compruebaDigitos);
}

//10. Función areaRectangulo que calcule el área de un rectángulo a partir de sus lados
function areaRectangulo(lado1, lado2) {
    return lado1 * lado2;
}

function pruebaAreaRectangulo() {
    let lado1 = 15;
    let lado2 = 20
    let area = areaRectangulo(lado1, lado2);

    alert("El área del rectangulo es: " + area + "cm");
}

/*11. Función imc que devuelva el IMC (índice de masa corporal)*/
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    //.toFixed redondea
    return imc.toFixed(2);
}

function pruebaIMC() {
    let peso = 76.54;
    let altura = 1.80;
    let imc = calcularIMC(peso, altura);

    alert("El índice de masa corporal (IMC) es: " + imc);
}

/*12. Función precioFinal que calcule el precio final de un producto después de aplicarle un descuento. 
Recibirá el precio original y el descuento*/
function precioFinal(precioOriginal, descuento) {
    let rebaja = (precioOriginal * descuento)/100;
    let precioFinal = precioOriginal - rebaja;
    return precioFinal;
}

function pruebaPrecioFinal() {
    let precioOriginal = 46;
    let descuento = 35;
    let precioConDescuento = precioFinal(precioOriginal, descuento);

    alert("El precio original del producto es: " + precioOriginal + "€ y el precio del producto con la rebaja es: " + precioConDescuento +"€");
}

//13. Función factorial que calcule el factorial de un número 
function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function pruebaFactorial() {
    let numFactorial = factorial(5);
    alert("El factorial de 5 es: " + numFactorial);
}

//14. Función divisible que recibe dos valores el dividendo
function divisible(dividendo, divisor) {
    //Verificamos que el divisor no sea cero
    if (divisor === 0) {
        return "CUIDADO, No se puede dividir por cero";
    }

    //Comprobamos si el dividendo es divisible por el divisor
    if(dividendo % divisor === 0) {
        return `El dividendo ${dividendo} es divisible por el divisor ${divisor}`;
    } else {
        return `El dividendo ${dividendo} no es divisible por el divisor ${divisor}`;
    }
}

function probarDivisible() {
    let resultado = divisible(15, 0);
    alert(resultado);
}