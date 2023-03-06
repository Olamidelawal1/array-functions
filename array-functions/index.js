/**Mutating array methods is an array method that changes the array itself instead of returning a new array 
with the new changes while non-mutation array methods is one that once created cannot be changed.Calling methods on it 
should create new arrays.

Examples of mutating array methods are:
array.push()
array.unshift()
array.pop()
array.shift()
array.splice()

Examples of non-mutation array methods are:
array.concat()
array.filter()
array.slice()
array.map()
array.fill()
*/

//Array of languages ('C#', 'JavaScript', 'Ruby', 'PHP', 'Python')
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
languages.push ('Kotlin');
languages.splice (3, 0, 'Java');
languages.shift();
languages.unshift ('Swift');
languages.unshift ('Scala');
languages.splice (5, 1, 'Go','Rust');
console.log (languages);

//What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana']
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
console.log (changeFruit);
//The result is [Function: changeFruit]


//Function that accepts an array of numbers as an argument and returns the maximum value in the array
function maximumValue (a){
}
 let output = maximumValue (Math.max(5, -10, 1))
 console.log (output);


//Function that accepts an array of numbers and returns the value multiplied by the index
function valTimesIndex (a){
    sum = 0;
    for (let i = 0; i < a.length; i++) sum +=a[i] * i;
    return sum;
}
let numbersMultByIndex =  valTimesIndex ([2, 5, 6])
console.log (numbersMultByIndex);