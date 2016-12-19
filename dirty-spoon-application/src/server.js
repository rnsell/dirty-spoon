let express = require("express")
let app = express()

let webappRoute = require("./frontend/route.js")()

app.use("/webapp", webappRoute)


app.listen("3000")