document.querySelector("#signup").addEventListener("click", function ()
{
let Name=document.querySelector("#name").value;
let Phoneno=document.querySelector("#phoneno").value;
let Password=document.querySelector("#password").value;

if(Name && Phoneno && Password)
{
    let userDetails={ name:Name,phoneno:Phoneno,password:Password};
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
    window.location.href="farmLogin.html";

}
else
{
    alert("Please enter all the Details");
}


})