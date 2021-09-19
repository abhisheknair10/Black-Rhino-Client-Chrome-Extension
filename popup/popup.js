var username = localStorage["username"];
var hash = localStorage["hash"];

if(username == undefined && hash == undefined){
    location.href = "/chrome-click/chrome-click.html";
}
else{
    //check whether website visited is advertised on Black Rhino
    location.href = "/main/main.html";
}