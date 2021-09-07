document.getElementById('cross').onclick = function() {
    window.close()
}

document.getElementById('back-to-main').onclick = function() {
    location.href = "/main/main.html";
}

document.getElementById('super-max').onclick = function() {
    document.getElementById("transfer-amount").value = 0;
}

document.getElementById('confirm-withdraw').onclick = function() {
    alert("Funds have been sent to wallet")
}