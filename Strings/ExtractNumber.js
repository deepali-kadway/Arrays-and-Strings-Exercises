function extraction(){
    //Method 1: using match function, (/(\d+)/) matches only the first occurrence of a number 
    const str = "CLG 00987 LSG 12345"
    console.log(`Original String: ${str}`)
    const newStr = str.match(/(\d+)/)
    console.log(`Extracted Number: ${newStr ? newStr[0] : 'No number found'}`)
}
extraction()

function extractionAll(){
    // Method 2: using match function with global flag, (/(\d+)/g) matches all occurrences of numbers
    const str = "CLG 00987 LSG 12345"
    const newStr = str.match(/\d+/g)  
    console.log(newStr.join(', ')) // Output: 00987, 12345
}
extractionAll()

function extractionNumbers() {
    // Method 3: using replace function to remove non-numeric characters
    let str = "Phone: (123) 456-7890";
    let matches = str.replace(/[^0-9]/g, "");
    console.log(matches);
    }
extractionNumbers()