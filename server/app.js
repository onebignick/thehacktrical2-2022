const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = 'mongodb+srv://admin:root@cluster0.fszmwax.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("connected to mongodb");
    } catch (error) {
        console.error(error);
    }
}

connect();
app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
})


app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));