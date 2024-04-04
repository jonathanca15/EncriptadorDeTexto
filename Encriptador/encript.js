function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = btoa(inputText);
    document.getElementById("encryptedText").value = encryptedText;
}
