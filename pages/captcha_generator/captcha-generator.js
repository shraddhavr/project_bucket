function genPass() {

    var password = "";

    var characters = "0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    var long = "6";
    for (var i = 0; i < long; i++) {

        gen = characters.charAt(Math.floor(Math.random() * characters.length));
        password += gen;
    }

    document.getElementById('pass').value = password;
}
function copy() {
    var copyText = document.getElementById("pass");
    copyText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copyText.value);
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
