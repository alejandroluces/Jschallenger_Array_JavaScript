// Return the average of an array of numbers

// Write a function that takes an array of numbers as argument. 
// It should return the average of the numbers.

// Escribe una función que tome una matriz de números como argumento. 
// Debería devolver el promedio de los números.

// Usamos el método de reducción para recorrer la matriz y acumular la suma de sus elementos.
// Una vez terminado el ciclo, dividimos la suma por la longitud del arreglo para obtener el promedio.

function myFunction( arr ) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
    }




/* 
function myFunction (arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var average = sum / arr.length;
    return average;


}

*/

console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000]));
console.log(myFunction([-50,0,50,200]));


