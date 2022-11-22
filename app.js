

function login(){
    var uname = document.getElementById("username");
    var pass = document.getElementById("password");

    if(uname == "hello" && pass == 1234){
        location.assign("http://127.0.0.1:5500/index2.html");
    }
    else{
        window.alert("Login page failed try again");
    }
}