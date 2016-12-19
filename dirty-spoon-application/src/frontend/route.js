let express = require("express")
let path = require("path")



module.exports =function (opt)  {
    let route = express.Router();
    let publicPath = path.join(__dirname, "./project/public/")
    return route.use("/", express.static(publicPath));     
}