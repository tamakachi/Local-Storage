// Information stored in localstorage is always kept in string format
// Remembering this is key to working with local storage as all data types will
// automatically be converted to string when stored this way


// Storing information in localStorage takes two parameters
// First is the key, second is the value

localStorage.setItem("name","Kent")
localStorage.setItem("age",32)


// Retrieving information from local storage requires the key
let username = localStorage.getItem("name")
let age = localStorage.getItem("age")


console.log(username,age)