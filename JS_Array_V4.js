// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. 
// Return the resulting array

// Escriba una función que tome una matriz (a) como argumento. Extraiga los primeros 3 elementos de a. 
// Devolver la matriz resultante


const myFunction =(a) =>{

    return a.splice(0,3)

}

console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));
