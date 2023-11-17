document.querySelector("#go").addEventListener("click", function ()
{
    var CROP=document.getElementById("crops").value;

    if(CROP==="Rice")
    window.location.href="rice.html";
   else if(CROP==="Wheat")
   window.location.href="wheat.html";
   else if(CROP==="Maize")
   window.location.href="maize.html";
   else if(CROP==="Tomato")
   window.location.href="tomato.html";
   else if(CROP==="Brinjal")
   window.location.href="brinjal.html";
   else if(CROP==="Lady's Finger")
   window.location.href="ladysfinger.html";
   else if(CROP==="Chillies")
   window.location.href="chillies.html";
   else if(CROP==="Mango")
   window.location.href="mango.html";
   else if(CROP==="Banana")
   window.location.href="banana.html";
   else if(CROP==="Guava")
   window.location.href="guava.html";
   else if(CROP==="Onion")
   window.location.href="onion.html";
   else if(CROP==="Potato")
   window.location.href="potato.html";
else
alert("Please choose your crop to proceed")
  })
