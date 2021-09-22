var onlineStatus = window.navigator.onLine ? 'on' : 'off';

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

document.getElementById('confirm-recovery').onclick = function() {
    if((window.navigator.onLine ? 'on' : 'off') == "on"){
        var client = new HttpClient();
        username = document.getElementById("username-box").value;
        shahash = document.getElementById("hash").value;
        client.get('http://blackrhino-ce.com/recover/account/' + username + '/' + shahash, function(response) {
            if(response == "200"){
                localStorage["username"] = username;
                localStorage["hash"] = shahash;
                setTimeout(function(){
                    location.href = "/main/main.html";
                }, 500);
            }
            else{
                alert("Incorrect Username and Secret Hash Combination");
            }
        });
    }
}