function  shopping(username : string, address ? : string)
{
    if(address == undefined)  //==comparision
  {
   console.log("Hai I am shopping in offline and user name as : " +username)
  }

  else
  {
  console .log("Hai I am shopping in online and with customer name as :" +username)
  }
}
shopping("siddhu", "road no : 2, kphb")