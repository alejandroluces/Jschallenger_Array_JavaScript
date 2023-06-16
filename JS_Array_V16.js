// Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. 
// Return the sorted array

// Escribe una función que tome una matriz de objetos como argumento. 
// Ordene la matriz por la propiedad b en orden ascendente. Devuelve la matriz ordenada


function myFunction(arr) {

    return arr.sort((a,b) => a.b - b.b);


  }

  console.log(myFunction([{a:1,b:2},{a:5,b:4}]));
  console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
  console.log(myFunction([{a:1,b:7},{a:2,b:1}]));
  
//   otra forma de hacerlo:

  function yFunction(arr) {
    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);
 }
 console.log(yFunction([{a:1,b:2},{a:5,b:4}]));
  console.log(yFunction([{a:2,b:10},{a:5,b:4}]));
  console.log(yFunction([{a:1,b:7},{a:2,b:1}]));