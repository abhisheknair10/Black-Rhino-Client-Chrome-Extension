/*-----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------*/

//http://139.59.143.3:3000/chrome-click/chrome-click.html

document.getElementById("please-wait").style.display = 'none';

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

/*-----------------------------------------------------------------------------*/

document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('proceed').onclick = function() {
    document.getElementById("please-wait").style.display = 'block';
    var client = new HttpClient();
    client.get('http://139.59.143.3:3000/newuser/generateuser-request', function(response) {
        var data = response.split("<>");

        localStorage["username"] = data[0];
        localStorage["hash"] = data[1];
        setTimeout(function(){
            location.href = "/main/main.html";
        }, 2000);
    });
}

document.getElementById('recover').onclick = function() {
    location.href = "/recover/recover.html";
}