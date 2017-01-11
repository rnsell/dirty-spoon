let express = require("express")
let app = express()
let port = 3000
let webappRoute = require("./frontend/route.js")()

app.use("/", webappRoute)


app.listen(port, function (){
    console.log(`Listening on port ${port}`)
})