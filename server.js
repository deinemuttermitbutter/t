const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/generate-page", (req, res) => {
    try {
        const pageContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Generated Page</title>
        </head>
        <body>
            <h1>Generated Content</h1>
            <p>This page was dynamically generated!</p>
        </body>
        </html>
        `;

        const fileName = uuidv4() + ".html";
        const filePath = path.join(__dirname, "public", fileName);

        fs.writeFileSync(filePath, pageContent);

        res.status(200).send(fileName);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Error generating page");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
