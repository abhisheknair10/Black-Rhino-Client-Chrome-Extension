/*-----------------------------------------------------------------------------*/
const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
};
user = document.getElementById("username");
num = generateRandomNumber(1000000000, 9999999999);
user.innerHTML = "user" + num.toString();

/*-----------------------------------------------------------------------------*/

//http://164.90.167.140:3000/chrome-click/chrome-click.html

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
client.get('http://164.90.167.140:3000/main', function(response) {
    console.log(response);
    nano_wallet_amount = document.getElementById("nano-wallet-amount");
    nano_wallet_amount.innerHTML = response[0];

    usd_wallet_amount = document.getElementById("usd-wallet-amount");
    usd_wallet_amount.innerHTML = response[1];
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