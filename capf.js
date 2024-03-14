function gencap(min, max) {
    document.getElementById('genc').innerHTML = Math.floor(Math.random() * (max - min) + min);
}

function check() {
    let a = 0, b = 0, c = 0;
    let m = document.getElementById('name').value;
    let n = document.getElementById('age').value;
    let z = document.getElementById('phn').value;
    let x = document.getElementById('genc').innerText;
    let y = document.getElementById('capc').value;
    let maleRadioButton = document.getElementById('male');
    let femaleRadioButton = document.getElementById('female');
    let othersRadioButton = document.getElementById('others');
    let res = document.getElementById('res');

    if (m.trim() === "") {
        showError("Enter your Name");
        return;
    }

    if (!isNumber(n) || n < 0) {
        showError("Enter a valid Age");
        return;
    }

    if (!maleRadioButton.checked && !femaleRadioButton.checked && !othersRadioButton.checked) {
        showError("Select your Gender");
        return;
    }

    if (z.trim() === "" || z.length !== 10 || !isNumber(z)) {
        showError("Enter a valid Phone Number (10 digits)");
        return;
    }

    if (x !== y) {
        showError("Invalid Captcha");
        return;
    }

    showSuccess("Form is submitted successfully");
}

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function showError(message) {
    let res = document.getElementById('res');
    res.className = "error";
    res.textContent = message;
}

function showSuccess(message) {
    let res = document.getElementById('res');
    res.className = "success";
    res.textContent = message;
}capf.js