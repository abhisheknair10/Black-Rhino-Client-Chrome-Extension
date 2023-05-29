function createDivHints(hint, num) {
    var div = document.createElement("div");
    div.id = "div" + num;
    div.style.position = "relative";
    div.style.top = "50px";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.width = "340px";
    div.style.height = "100px";
    div.style.borderTop = "1px solid rgba(235, 235, 235, 0.2)";
    div.style.borderBottom = "1px solid rgba(235, 235, 235, 0.2)";
    div.style.padding = "10px";
    div.style.backgroundClip = "content-box";
    div.style.paddingTop = "5px";
    div.style.paddingBottom = "5px";
    div.style.background = "rgba(100, 100, 100, 0.1)";
    div.style.color = "white";
    div.style.letterSpacing = "1px";
    div.style.textAlign = "justify";
    div.innerHTML = hint;

    document.getElementById("hints-div").appendChild(div);
    
}


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
client.get('https://blackrhino-ce.com/hints/' + username, function(response) {
    hints_arr = response.split("<>");
    console.log(hints_arr);
    for (let i = 0; i < hints_arr.length-1; i++) {
        createDivHints(hints_arr[i], i+1)
    }
});

document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('back-to-main').onclick = function() {
    location.href = "/main/main.html";
}

