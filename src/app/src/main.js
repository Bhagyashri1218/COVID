
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json())

const mod = require("./operations");

app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;
        await mod.adduser(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.sendStatus(500);
    }
});


app.listen(3000);
