document.getElementById("creating").style.display = 'none';

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}

document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('create-account').onclick = function() {
    if((window.navigator.onLine ? 'on' : 'off') == "on"){
        document.getElementById("creating").style.display = 'none';
        document.getElementById("creating").innerHTML = "Creating...";
        var email = document.getElementById("email-box").value;
        var validated = validateEmail(email);
        if(validated){
            var client = new HttpClient();
            client.get('https://blackrhino-ce.com/newuser/generateuser-request/' + email, function(response) {
                document.getElementById("creating").style.display = 'block';
                if(response == "emailfound"){
                    document.getElementById("creating").style.display = 'none';
                    alert("The Email Address is already in use. Please try another Email Address to Sign Up")
                }
                else if(response == "userfound"){
                    document.getElementById("creating").style.display = 'none';
                    alert("There was a problem while generating an account. Please try again")
                }
                else{
                    var data = response.split("<>");
                    
                    localStorage["username"] = data[0];
                    localStorage["hash"] = data[1];
                    localStorage["verified"] = 0;
                    setTimeout(function(){
                        location.href = "/main/main.html";
                    }, 500);
                }
            });
        }
        else{
            document.getElementById("creating").innerHTML = "Invalid Email Address";
            document.getElementById("creating").style.display = 'block';
        }
    }
    else{
        document.getElementById("please-wait").innerHTML = "Unable to Connect to Server";
        document.getElementById("please-wait").style.display = 'block';
    }
}