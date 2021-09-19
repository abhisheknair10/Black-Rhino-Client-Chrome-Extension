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

var xlm_amount = new HttpClient();
xlm_amount.get('http://207.154.251.141:3000/main/' + userName + "/" + secretHash, function(response) {
    localStorage["xlmamount"] = response;
});


document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('back-to-main').onclick = function() {
    location.href = "/main/main.html";
}

document.getElementById('super-max').onclick = function() {
    document.getElementById("transfer-amount").value = localStorage["xlmamount"];
}

document.getElementById('confirm-withdraw').onclick = function() {
    walletaddr = document.getElementById("wallet-address").value;
    amount = document.getElementById("transfer-amount").value;
    var client = new HttpClient();
    client.get('http://207.154.251.141:3000/withdraw/' + userName + '/' + secretHash + 
    '/' + walletaddr + '/' + amount, function(response) {
    });
    alert("Funds have been sent to wallet")
}