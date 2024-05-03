const express = require("express");
const app = express();

app.get("/zapatillas", (req, res) => {
    // ...
    res.send("hola!");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});