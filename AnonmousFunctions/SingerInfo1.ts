function singerName(name : string) : void
{
    console.log(name)  //variable/parameter---> string ---> name is printing
}
singerName("Anirudh")
 
function singersing(song : (name : string) => void) : void  //here "(name : string) => void" is an anonmous function
{
   song("melody")  //variable/parameter ---> function ---> calling the function
}
singersing(singerName)