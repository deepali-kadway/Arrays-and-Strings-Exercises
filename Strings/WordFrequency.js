function frequency(str){
    const words = str.match(/\b\w+\b/g) // \w matches any word character (alphanumeric & underscore), \b matches word boundaries, + means one or more occurrences
    const result = {}
    words.forEach(newword => {
        //returns an array of all occurrences of newword in words along with their count
        result[newword] = words.filter(w => w === newword).length
   })

    return result
}
console.log(frequency("Federer and Nadal are tennis legends. They are called GOATs in tennis"))
