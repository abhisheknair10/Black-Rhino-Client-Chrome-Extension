var username = localStorage["username"];
var hash = localStorage["hash"];

if(username == undefined && hash == undefined){
    location.href = "/chrome-click/chrome-click.html";
}
else{
    location.href = "/main/main.html";
}