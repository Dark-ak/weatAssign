const express = require('express')
const app = express()
const cors = require("cors")
const weather = require("./src/routes/weather")


const port = process.env.port || 3000

app.use(cors())
app.use("/api", weather)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))