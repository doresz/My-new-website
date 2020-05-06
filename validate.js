function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmPassword").value;
    var username = document.getElementById("username").value;

    if (password !== confirmpassword) {
        alert("The passwords are not the same!");
        return false;

    }
    else if(password===confirmpassword){
        alert("Registration successfull");
        window.open("http://localhost:63342/Html/htmlfile2/index.html?_ijt=b06fgt18mkp32aql3o0cs0ejn2");
        return true;
    }




}
