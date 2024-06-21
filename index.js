require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.use(express.static("./client/build"))
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))

app.listen(port, () => console.log(`Connected on port: ${port}` ))