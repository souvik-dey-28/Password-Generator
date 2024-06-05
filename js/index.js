
function generate(l) {
    const c = document.getElementById("txtPassword").value;
    let parola = '';
    for (let i = 0; i < l; i++) {
        const r = Math.floor(Math.random() * c.length);
        parola += c.charAt(r);
    }
    $('#sonuc').tooltip('disable');
    return parola;
}

function btnClickHandler(l) {
    const password = generate(l);
    document.getElementById('sonuc').value = password;
}

function copyPassword() {
    const copyText = document.getElementById('sonuc');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile device
    navigator.clipboard.writeText(copyText.value);
    $('#sonuc').tooltip('enable');
    $('#sonuc').tooltip('show');
}

document.getElementById('btn8').addEventListener('click', function () {
    btnClickHandler(8);
});

document.getElementById('btn12').addEventListener('click', function () {
    btnClickHandler(12);
});

document.getElementById('btn16').addEventListener('click', function () {
    btnClickHandler(16);
});

document.getElementById('sonuc').addEventListener('click', function () {
    copyPassword();
});

