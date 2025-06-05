function capitalize(str){
    const output = str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    console.log(output)
}
capitalize("how awesom is this?")