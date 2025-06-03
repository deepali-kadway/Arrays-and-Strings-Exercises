function replace(){
    const original = "Mountains and Beaches"    //string.replace(searchValue, newValue);
    const newString = original.replace("and", "or")
    const newString2 = original.replace(/a/g, "o") //replace all occurrences of 'a' with 'o'
    console.log(newString + "\n" + newString2);
}
replace();

function substring(){
    let str = "The Taj Mahal is in India";
    //removing the character at index 4
    //substring(start, end) - extracts characters from start to end (not including end)
    let newStr = str.substring(0, 4) + str.substring(5);
    let newStr1 = str.substring(0, 4) + str.substring(8);
    console.log(newStr);
    console.log(newStr1);
}
substring();
