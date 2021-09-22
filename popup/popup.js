var username = localStorage["username"];
var hash = localStorage["hash"];

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

if(username == undefined && hash == undefined){
    location.href = "/chrome-click/chrome-click.html";
}
else{
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        try{
            theurl = tabs[0].url;
            console.log(theurl)
            theurl = theurl.split("https://")[1];
            console.log(theurl)
            theurl = theurl.split('/');
            console.log(theurl)
            theurl = theurl.join('-');
            console.log(theurl)
            client.get('http://blackrhino-ce.com/checkurl/' + username + '/' + theurl, function(response) {
                location.href = "/main/main.html";
            });
        }
        catch(err){
            location.href = "/main/main.html";
        }
    });
}