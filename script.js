document.addEventListener("DOMContentLoaded", function() {
    const generateQRButton = document.getElementById("generateQR");
    const qrCanvas = document.getElementById("qrCanvas");
    
    generateQRButton.addEventListener("click", function() {
        // Simulate QR code generation
        const ctx = qrCanvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, qrCanvas.width, qrCanvas.height);
    });
});
