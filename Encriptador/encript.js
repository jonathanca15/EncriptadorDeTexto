function encryptText() {
    var inputText = document.getElementById("inputText").value;
    var encryptedText = btoa(inputText); // Encoding text to base64
    document.getElementById("encryptedText").value = encryptedText;
}
