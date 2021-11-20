const postRouter = require("./post")
const accountRouter=require("./author")
function route(app){
    app.use("/account",accountRouter)
    app.use("/",postRouter)
}

module.exports = route;