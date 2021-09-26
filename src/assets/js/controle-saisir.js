function controleadmin(){
    var username =  document.getElementById("username").value;
    var email =  document.getElementById("email").value;
    var password =  document.getElementById("password").value;
    var t = true;
    if( username == ""){
        alert("username obligatoire ! ");
        t = false;
    }
    if( email == ""){
        alert("email obligatoire ! ");
        t = false;
    }
    if( password == ""){
        alert("password obligatoire ! ");
        t = false;
    }
    if( ! t){
        document.getElementById("b").disabled = true;
    }
    else{
        document.getElementById("b").disabled = false;
    }

}