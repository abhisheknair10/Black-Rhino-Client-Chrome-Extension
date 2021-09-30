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
    if(transferamount > 0){
        var client = new HttpClient();
        client.get('https://blackrhino-ce.com/withdraw/' + userName + '/' + secretHash + 
        '/' + walletaddr + '/' + transferamount, function(response) {
            if(response == "non-existent"){
                alert("Something went wrong while verifying your account")
            }
            else if(response == "wrong-hash"){
                alert("Something went wrong while verifying your account")
            }
            else if(response == "too-much-amount"){
                alert("You do not have the requested amount of Zcash in your Black Rhino Wallet")
            }
            else if(response == "sent-to-wallet"){
                alert("Withdraw Request has been sent. It could take up to 24 hours till you see your funds in your wallet")
            }
            else if(response == "request-already-there"){
                alert("Withdraw Request for this account already exists. Please send another withdraw request after the previous request has been approved")
            }
        });
    }
    else{
        alert("Withdraw Amount has to be greater than 0")
    }
}