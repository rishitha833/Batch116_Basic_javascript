interface stddata   //rough data
{
      stdid : number,
      stdname : string,
      stdcousre : string,
      stdstream : string,
      stdstatus : boolean,
      stdaddress : {   //stdaddress----> sub object
                       sstreet : string,
                       slocation : string,
                       spincode : number,
                       sstate : string, 
                    }
}
  
let stdinfo : stddata =  //converts to fair data as stdinfo
{
    stdid : 5656,
    stdname : "rashmitha",
    stdcourse : "Btech",
    stdstream : "CSE",
    stdstatus : true,
    stdaddress :
                {
                   sstreet : "roadno : 2",
                   slocation : "bangolore",
                   spincode : 400017,
                   sstate : "karnataka",

                }
}
console.log( typeof stdinfo.stdstream)
console.log( typeof stdinfo.stdaddress.spincode)
console.log("sstreet" in stdinfo.stdaddress)
console.log("sstreet1" in stdinfo.stdaddress)