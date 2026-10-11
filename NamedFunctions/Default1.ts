function  busbooking(age : number, ticketprice : string = "40% concession")
{
    if(age > 30)  
  {
   console.log("The updated ticket price is : " +ticketprice)
  }

  else
  {
  console .log("Pay full amount as per ticket fare")
  }
}
busbooking(25)