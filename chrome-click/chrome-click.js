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