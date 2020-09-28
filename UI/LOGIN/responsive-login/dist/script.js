function visiblity(){
        var x = document.getElementById("login-password");
        var icon = document.getElementById("password-visiblity");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
       icon.classList.toggle("password-visible");
    }
function validateEmail(emailField){
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (emailField.value.length > 3 && reg.test(emailField.value) == false) 
  {
    let emailInputDiv = document.getElementById("login-id");
    emailInputDiv.style.borderColor = "#f501017a";

    return false;
  }
  return true
}
function validatePass(passwordField){
  if (passwordField.value.length > 0 && passwordField.value.length < 6) 
  {
    let passwordInputDiv = document.getElementById("login-password-div");
    passwordInputDiv.style.borderColor = "#f501017a";

    return false;
  }
  return true
}
function UnvalidateEmail(){
  let emailInputDiv = document.getElementById("login-id");
  emailInputDiv.style.borderColor = "#bfbbbb7a";
}
function UnvalidatePass(){
  let passwordInputDiv = document.getElementById("login-password-div");
  passwordInputDiv.style.borderColor = "#bfbbbb7a";
}