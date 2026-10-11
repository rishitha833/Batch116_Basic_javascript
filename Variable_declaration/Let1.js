let myage = "S20"  //declaring the value
console.log(myage)

myage = 100  //re-assigning 
console.log(myage) //100

//let myage = "Thirty Years" //re-declaring the value  //SyntaxError: Identifier 'myage' has already been declared

{
    console.log(myage) //accessing outside block to inside block //100
    let mycolor = "Blue"
    console.log(mycolor)  //accesssing inside block to inside block // Blue 
}

//console.log(mycolor)  //ReferenceError: mycolor is not defined