//for loops
let str = "My cat is awesome!"
for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

//for of loops
for(let char of str){
    console.log(char)
}

//for each loops
str.split('').forEach((char, index) => {
    console.log(`Character at index ${index}: ${char}`)
})

//for in loops
for (let index in str) {
    console.log(str[index]);
}

//reduce() method
let result = str.split('').reduce((accumulator, char) => accumulator + char, '');
console.log(result);

let numb = [2, 5, 6]
let rslt = numb.reduce((accumulator, char) => accumulator + char, 0)
console.log(rslt);