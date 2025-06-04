function checkValidJSON(str){
    if((str.startsWith('{') && str.endsWith('}')) ||
       (str.startsWith('[') && str.endsWith(']'))) {
      try{
        const parsedStr = JSON.parse(str)           //converts the JSON string into a JavaScript object
        if (typeof parsedStr === 'object' && parsedStr !== null) {
                return true;
            }
      }
      catch(e){
        return false;
      }
    }
return false    // Check if the string starts with '{' or '[' and ends with '}' or ']'. Return false if it does not.
}
const str1 = '{"name": "Deepali", "age": 30, "city": "Edmonton"}'
const str2 = '{"name": "Deepali", "age": 30, "city": "Edmonton"'
const str3 = '[1,2,3,4,5]'

console.log(checkValidJSON(str1)) 
console.log(checkValidJSON(str2)) 
console.log(checkValidJSON(str3)) 