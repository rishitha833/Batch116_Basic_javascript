function sumOfTotal(...salaries : number[])  //11, 16, 12, 13 , 10
{
  let z : number = 0;
  for(let s of salaries)  //11  16  12  13  10
  {
    z = z + s;   //z---> 11 , 27, 39, 52, 62 
  }
  console.log("The Sum of Salaries : "+z)

}

sumOfTotal(22, 11, 10, 14, 18)