const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/hi", (req, res) => {
    res.send("hi");
});

var port = process.env.port || 3000;
app.listen(port, () => console.log("Server is running on port " + port))