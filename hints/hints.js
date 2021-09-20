function createDivHints(hint, num) {
    var div = document.createElement("div");
    div.id = "div" + num;
    div.style.position = "relative";
    div.style.top = "40px";
    div.style.width = "360px";
    div.style.height = "100px";
    div.style.border = "1px solid rgba(235, 235, 235, 1)"
    div.style.padding = "5px";
    div.style.background = "rgba(250, 250, 250, 1)";
    div.style.color = "black";
    div.innerHTML = num + ". " + hint;

    document.getElementById("hints-div").appendChild(div);
    
}

createDivHints("Our service provides easy access to servers, databases, networking and many more to our users that wish to host websites, perform complex calculations, etc.", 1)

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
var username = localStorage["username"];
client.get('http://207.154.251.141:3000/hints/' + username, function(response) {
    hints_arr = response.split("<>");
    console.log(hints_arr);
});

document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('back-to-main').onclick = function() {
    location.href = "/main/main.html";
}

