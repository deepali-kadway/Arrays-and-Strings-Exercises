function countCharacters(str, char){
    return str.split('').reduce((count, currentChar) => 
        currentChar === char ? count + 1 : count, 0)

}
console.log(countCharacters("Macchu Picchu", "c"))