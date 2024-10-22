function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charPool = "";
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool === "") {
        alert("Pilih salah satu.");
        return;
    }

    if(length < 8){
        alert("Masukkan minimal 8");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    document.getElementById("password").value = password;
    document.getElementById('passwordOutput').textContent = password;
    document.getElementById('div_copy').innerHTML = `
        <button class="copyBtn" id="copyBtn">Copy Password</button>
    `;
    
    document.getElementById('copyBtn').addEventListener('click', () => {
        const passwordOutput = document.getElementById('passwordOutput').textContent;
        if (passwordOutput) {
            navigator.clipboard.writeText(passwordOutput).then(() => {
                alert('Password copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        } else {
            alert('No password to copy!');
        }
    });
}

