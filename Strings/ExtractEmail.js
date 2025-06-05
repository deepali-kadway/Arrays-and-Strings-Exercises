function extract(email){
    const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return email.match(regex).toString();
}
console.log(extract("Email id : ac123@yahoo.co.in"))

