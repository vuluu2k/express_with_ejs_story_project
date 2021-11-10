const postRouter = require("./post")

function route(app){
    app.use("/home",postRouter)
}

module.exports = route