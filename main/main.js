/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

//http://139.59.143.3:3000/chrome-click/chrome-click.html

var userName = localStorage["username"];
var secretHash = localStorage["hash"];

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
client.get('http://blackrhino-ce.com/main/' + userName + "/" + secretHash, function(response) {
    xlm_wallet_amount = document.getElementById("xlm-wallet-amount");
    xlm_wallet_amount.innerHTML = response;
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
    setTimeout(function(){
        location.href = "/chrome-click/chrome-click.html";
    }, 500);
};