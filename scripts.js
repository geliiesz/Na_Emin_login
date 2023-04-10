console.log("Refuge, Recover, Rediscover - Login Page")

function logCheck(){
    if(document.getElementById("username").value === ""){
        if(document.getElementById("password").value === ""){
            document.getElementById("msgCheck").innerHTML = "Please enter your username and password.";
            document.getElementById("uError").innerHTML = " *";
            document.getElementById("pError").innerHTML = " *";
            console.log("Login error.");
        }
        else{
            document.getElementById("msgCheck").innerHTML = "Please enter your username.";
            document.getElementById("uError").innerHTML = " *";
            document.getElementById("pError").innerHTML = "";
            console.log("Login error.");
        }
    }
    if(document.getElementById("username").value !== ""){
        if(document.getElementById("password").value === ""){
            document.getElementById("msgCheck").innerHTML = "Please enter your password.";
            document.getElementById("uError").innerHTML = "";
            document.getElementById("pError").innerHTML = " *";
            console.log("Login error.");
        }
        else{
            document.getElementById("msgCheck").innerHTML = "Login successful. Welcome!";
            document.getElementById("uError").innerHTML = "";
            document.getElementById("pError").innerHTML = "";
            console.log("Login success.");
        }
    }
}