const storyRouter = require("./story")
const accountRouter=require("./author")
function route(app){
    app.use("/account",accountRouter)
    app.use("/",storyRouter)
}

module.exports = route;