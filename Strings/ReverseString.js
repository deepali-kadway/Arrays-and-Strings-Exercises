function reverseString(){
    const statement = "My heart lies in the mountains";
    const reversed1 = statement.split('').reverse().join('');
    console.log(`The reversed string is: ${reversed1}`);

    //using spread operator
    const reversed2 = [...statement].reverse().join('');
    console.log(reversed2)
}
reverseString();

