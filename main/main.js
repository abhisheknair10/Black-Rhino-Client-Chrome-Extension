/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

//http://139.59.143.3:3000/chrome-click/chrome-click.html

var userName = localStorage["username"];
var secretHash = localStorage["hash"];
var verified = localStorage["verified"];

if(verified == 0){
    alert(`Note: You will not be able to earn from Black Rhino CE until 
    your account has been verified.\nPlease check your email inbox from verify@blackrhino-ce.com to verify your account`)
}

username = document.getElementById("username");
username.innerHTML = userName;


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

var client = new HttpClient();
client.get('https://blackrhino-ce.com/main/' + userName + "/" + secretHash, function(response) {
    zcash_wallet_amount = document.getElementById("zcash-wallet-amount");
    if(response == 0){
        zcash_wallet_amount.innerHTML = "0.00";
    }
    else{
        zcash_wallet_amount.innerHTML = response;
    }
});

/*-----------------------------------------------------------------------------*/

document.getElementById('cross').onclick = function() {
    window.close();
}

document.getElementById("hints-button").onclick = function () {
    location.href = "/hints/hints.html";
};

document.getElementById("wallet-button").onclick = function () {
    location.href = "/wallet/wallet.html";
};

document.getElementById("username").onclick = function () {
    str = document.getElementById('username').innerHTML;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

document.getElementById("secret").onclick = function () {
    str = document.getElementById('secret').innerHTML;
    const el = document.createElement('textarea');
    el.value = secretHash;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

document.getElementById("logout").onclick = function () {
    localStorage.removeItem("username");
    localStorage.removeItem("hash");
    localStorage.removeItem("verified");
    setTimeout(function(){
        location.href = "/chrome-click/chrome-click.html";
    }, 500);
};