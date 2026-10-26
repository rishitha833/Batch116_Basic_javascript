let A : string = "Hai iam rishitha and my roll no : 22@134&45 and course is Btech";

let myRemoveAlpha : string = A.replace(/[a-zA-Z]/g, "")
let myRemoveNum : string = A.replace(/[0-9]/g, "")
let withSpec : string = A.replace(/[a-zA-Z0-9]/g, "")
let removeSpec : string = A.replace(/[^a-zA-Z0-9]/g, "")

console.log(myRemoveAlpha)

console.log(myRemoveNum)
console.log(withSpec)
console.log(removeSpec)
