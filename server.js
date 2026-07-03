const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.json({
        message:  "Welcome to DevOps Assignment - CI/CD Successful",
        status: "Running Successfully"
    });
});

// Health Check Route
app.get("/health", (req, res) => {
    res.json({
        status: "Healthy",
        uptime: process.uptime()
    });
});

// About Route
app.get("/about", (req, res) => {
    res.json({
        project: "AWS DevOps Assignment",
        author: "Nanda Kishore"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});