var DBemail = "kari@gmail.com";
var DBPass = "123";

function login(e) {
  e.preventDefault();
  console.log("login");
  Validate.validateLogin();
}

var Validate = (function() {
  var _validateEmail = function() {
    var user = document.getElementById("InputEmail").value;
    console.log("email");
    if (user == DBemail) {
      return true;
    } else {
      return false;
    }
  };
  var _validatePass = function() {
    var pass = document.getElementById("InputPass").value;
    console.log("password");
    if (pass == DBPass) {
      return true;
    } else {
      return false;
    }
  };
  var validateLogin = function() {
    console.log("public");
    if (_validateEmail() && _validatePass()) {
      console.log("correct");
      var form = document.getElementById("loginForm");
      form.submit();
    } else {
      console.log("incorrect");
      var error = document.getElementById("errorMessage");
      error.style.display = "inline";
    }
  };
  return {
    validateLogin: validateLogin
  };
})();

//var btn = document.getElementById("btnLogin");
//btn.onclick = Module.validateLogin;





