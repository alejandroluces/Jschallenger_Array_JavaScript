// Write a function that takes an array (a) as argument. 
// Remove the first 3 elements of 'a'. 
// Return the result
// "Add_exercise_jschallenger_Array_V2"

// Escriba una función que tome una matriz (a) como argumento. 
// Elimina los 3 primeros elementos de 'a'. 
// Devolver el resultado

const myFunction =(a) =>{

    return a.splice(3)

}

console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));


