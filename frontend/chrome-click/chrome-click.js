/*-----------------------------------------------------------------------------*/

document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('proceed').onclick = function() {
    location.href = "/createaccount/createaccount.html";
}

document.getElementById('recover').onclick = function() {
    location.href = "/recover/recover.html";
}

document.getElementById('link').onclick = function() {
    window.open("https://www.blackrhino-ce.com");
}