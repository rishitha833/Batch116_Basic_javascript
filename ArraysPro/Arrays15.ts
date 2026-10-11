let mystrength1 : number[] =[33, 17, 8 , 65, 20];

let mystrength2 : number[] = mystrength1.sort((m , n)=> m-n) //ascending order

let mystrength3 : number[] = mystrength1.sort((m , n) => n-m)  //descending order


console.log(mystrength2)
console.log(mystrength3)
