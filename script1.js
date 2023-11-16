document.querySelector("#login").addEventListener("click", function ()
{
    let Phoneno=document.querySelector("#phoneno").value;
    let Password=document.querySelector("#password").value;

    if(Phoneno && Password)
    {
        let localstorageData=localStorage.getItem("userDetails");

        if(localstorageData)
       {
        localstorageData=JSON.parse(localstorageData);
        if(Phoneno===localstorageData.phoneno &&  Password===localstorageData.password){
        window.location.href="farmHome2.html"
       }
       else{
        alert("Mobileno/Password incorrect");
       }
    }
    else{
        alert("Please Signup");
        window.location.href="farmsignup.html"
    }
}
    else
    {
        alert("Please Enter all the details");
    }
})