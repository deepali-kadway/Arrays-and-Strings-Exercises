function palindrome(str){
    let ans = str.split('').reverse().join('')
    ans === str ? console.log(`${str} is a palindrome`) : console.log(`${str} is not a palindrome`)
}
palindrome("madam")
palindrome("hectic")
