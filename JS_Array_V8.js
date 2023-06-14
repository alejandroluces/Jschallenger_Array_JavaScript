// Write a function that takes an array of numbers as argument. 
// Return the number of negative values in the array.

// Escribe una función que tome una matriz de números como argumento. 
// Devuelve el número de valores negativos en la matriz.
/* 
const myFunction =(a) =>{
    let contador = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] < 0) {
            contador++;
        }
    }
    return contador;

      
    }

*/

// Otra forma de resolver

const myFunction =(a) =>{

    return a.filter((el)=> el<0).length;

}

    

console.log(myFunction([1,-2,2,-4]));//2
console.log(myFunction([0,9,1]));//0
console.log(myFunction([4,-3,2,1,0]));//1



