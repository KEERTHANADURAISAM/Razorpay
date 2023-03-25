import express from "express"
import dotenv from "dotenv"
import { dataBaseConnection } from "./db.js"

// env configuration 
dotenv.config()

// db base connection
dataBaseConnection();

const app = express()
const PORT=process.env.PORT ||5000


app.get('/', (req, res) => {
    res.send("working")

})


app.listen(PORT, ()=>console.log(`listening on port${PORT}`))