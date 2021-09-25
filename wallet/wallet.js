var onlineStatus = window.navigator.onLine ? 'on' : 'off';

var userName = localStorage["username"];
var secretHash = localStorage["hash"];

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

document.getElementById('back-to-main').onclick = function() {
    location.href = "/main/main.html";
}

document.getElementById('confirm-withdraw').onclick = function() {
    walletaddr = document.getElementById("wallet-address").value;
    transferamount = document.getElementById("transfer-amount").value;
    var client = new HttpClient();
    client.get('http://blackrhino-ce.com/withdraw/' + userName + '/' + secretHash + 
    '/' + walletaddr + '/' + transferamount, function(response) {
        alert("Funds have been sent to wallet");
    });
}