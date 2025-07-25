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

function slice(){
    let str = "Dominican Republic is a beautiful country";
    let result = str.slice(0, 10) + str.slice(19)   
    console.log(result); //removes the characters from index 10 to 17
}
slice();

function slicewithIndex(){
    let s1 = "Sustainable Development in JavaScript";
    let start = s1.indexOf(" in");
    let s2 = s1.slice(0, start) + s1.slice(start + " in".length);
    console.log(s2);
}
slicewithIndex();