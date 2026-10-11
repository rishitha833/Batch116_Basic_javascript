const mybike = "duke"  //declaring the value
console.log(mybike)

//mybike= "GT" //re-assigning  //TypeError: Assignment to constant variable.

//const mybike ="Royal" //re-declaring //SyntaxError: Identifier 'mybike' has already been declared

{
    console.log(mybike) //accessing outside data into inside block //duke
    const myinfo = "TCS"
    console.log(myinfo)  //inside data into inside of a block //TCS
}
//console.log(myinfo)  //accessing inside of a block into outside of a block  //ReferenceError: myinfo is not defined
