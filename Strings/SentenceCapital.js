function capitalizeSentence(sentence){
   const result = sentence.split(/[.!?]\s+/).map(sent => sent.charAt(0).toUpperCase() + sent.slice(1)).join('! ')

    return result
}
console.log(capitalizeSentence("hello dear! how are you?"))