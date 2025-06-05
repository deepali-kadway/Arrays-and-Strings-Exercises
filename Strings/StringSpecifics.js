function checkAlphabets(str){
    const regex = /[a-zA-Z]/g
    console.log(str.match(regex).length)
}
checkAlphabets("There are 50 states in USA") 