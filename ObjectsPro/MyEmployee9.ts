interface mother   //rough data
{
      mname : string,
      mage : number,
      mhobbies : string,
      mDOB : string,
      
}
interface father
{
   fname : string,
   fage : number,
   fhobbies : string,
   fDOB : string,
      
}
let mothdata : mother =
{
     mname : "sujatha",
     mage : 46,
   mhobbies : "Singing",
     mDOB : "03 OCT 1980",

}
let fathdata : father =
{
   fname : "srinivas",
   fage : 48,
   fhobbies :"cricket",
   fDOB : "23 DEC 1978",
}
let fathermother = {...mothdata, ...fathdata}
console.log(fathermother)