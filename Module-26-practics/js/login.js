document.getElementById("login-submit").addEventListener("click", function(){
   const emailField = document.getElementById("user-email");
   const userEmail = emailField.Value;
    

   //get user password 
   const passwordField = document.getElementById("user-password");
   const userPassword = passwordField.Value;

   if (userEmail == "sontan@baap.com" && userPassword == "secret"){
    window.location.href = "banking.html"
   }
})



