/*1. Función llamada onlyUniques que puede aceptar cualquier número de argumentos 
y devuelva una matriz solo con los argumentos únicos*/
function onlyUniques(...args) {
    return [...new Set(args)];
}

//Ejemplos
console.log(onlyUniques('cat', 'cat', 'dog', 'pig'));
console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4));


/*2. Función llamada squareAndSum que toma cualquier número de argumentos. los eleva al
cuadrado y luego suma todos los cuadrados*/
function squareAndSum(...args) {
    return args.reduce((sum, num) => sum + num ** 2, 0);
}

//Ejemplos
console.log(squareAndSum(2, 4, 3)); //2*2 + 4*4 + 3*3 = 4+16+9
console.log(squareAndSum(1,2)); //1*1 + 2*2 = 1+4