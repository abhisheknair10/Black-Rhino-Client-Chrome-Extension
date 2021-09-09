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
client.get('http://139.59.143.3:3000/main/' + userName + "/" + secretHash, function(response) {
    const data = response.split("<>");

    nano_wallet_amount = document.getElementById("nano-wallet-amount");
    nano_wallet_amount.innerHTML = data[0];

    usd_wallet_amount = document.getElementById("usd-wallet-amount");
    usd_wallet_amount.innerHTML = data[1];
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