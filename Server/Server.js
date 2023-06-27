const express = require("express")
const { default: mongoose } = require("mongoose")
const cors = require("cors")
const connectDB = require("./Config/db")
require("dotenv").config({ path: "./config/.env" })
const app = express()
connectDB()
app.use(express.json())
app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true
}))
app.use("/todos", require("./Routes/todoRoutes"))
mongoose.connection.once("open", e => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT || 5000, err => {
        err
            ? console.log(`UNABLE TO START ${err}`)
            : console.log(`http://localhost:${process.env.PORT || 5000}`)
    })
})
mongoose.connection.on("error", err => console.log(`MONGO ERROR ${err}`))