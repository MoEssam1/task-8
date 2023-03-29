function formvaldate()
{
    var email =document.getElementById("email_login").value;
    var password=document.getElementById("pass_login").value;
    if(!email.includes('@')||!isNaN(email))
    {
        alert("invalid Email")
        email_login.focus();
        return false;
    }
    else if(password.length<8){
        alert("invalid Password")
        pass_login.focus();
        return false;
    }
    else{
        return true;

    }
}
function signvalidate()
{
  var fname=document.getElementById("fname").value;
  var lname=document.getElementById("lname").value;
  var email=document.getElementById("email").value;
  var pass=document.getElementById("pass").value;
  var gender=document.getElementsByName("gender");
  if(fname.length<3)
  {
    alert("invalid first name");
    return false;
  }
  else if(lname.length<3){
    alert("invalid Surname name");
    return false;
  }
  else if(!email.includes('@'))
  {
      alert("ivalid email");
      return false;
  }
  else if(pass.length<8){
    alert("ivalid password");
    return false;
}
else{
    return true;
}
}

function closeNav(){
    document.getElementById("signup1").style.display="none";

}
function openNav()
{
    document.getElementById("signup1").style.display="flex";

} 

