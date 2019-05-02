var words = ["ground", "control", "to", "major", "tom"];


var myMap = function(input, func) {
var arr = []
  for (var i in input) {
    arr.push(func(input[i]))
  } return arr
}

console.log(myMap(words, function(word) {
  return word.length;
}));

console.log (myMap(words, function(word) {
  return word.toUpperCase();
}));

console.log (myMap(words, function(word) {
  return word.split('').reverse().join('');
}));






