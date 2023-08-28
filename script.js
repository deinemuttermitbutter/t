let generateButton = document.getElementById("generateButton");
let contentTextarea = document.getElementById("content");

let generateCooldown = false;

function generateFile() {
    if (!generateCooldown) {
        generateCooldown = true;
        generateButton.disabled = true;
        setTimeout(() => {
            generateCooldown = false;
            generateButton.disabled = false;
        }, 5000);

        let fileContent = contentTextarea.value;
        sendDataToServer(fileContent);
    }
}

function sendDataToServer(fileContent) {
    fetch("send.py", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_content: fileContent }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}
