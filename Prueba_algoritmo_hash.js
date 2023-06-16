// Documentacion
// algoritmo de hash
// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript



var hash = 0;
var str = "hola como estas";
for (var i = 0; i < str.length; i++) {
  var char = str.charCodeAt(i);
  hash = ((hash << 5) - hash) + char;
  hash = hash & hash;
}
console.log(hash);
