/*-----------------------------------------------------------------------------*/
const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
};
user = document.getElementById("username");
num = generateRandomNumber(1000000000, 9999999999);
user.innerHTML = "user" + num.toString();

/*-----------------------------------------------------------------------------*/



/*-----------------------------------------------------------------------------*/

document.getElementById('cross').onclick = function() {
    window.close();
}

document.getElementById("hints-button").onclick = function () {
    location.href = "/hints/hints.html";
};

document.getElementById("wallet-button").onclick = function () {
    location.href = "/wallet/wallet.html";
};

document.getElementById("username").onclick = function () {
    str = document.getElementById('username').innerHTML;
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}