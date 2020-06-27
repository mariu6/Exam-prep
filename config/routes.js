const routes = require("../routes");       

module.exports = (app) => {
    app.use("/", routes.home);            
    app.use("/users", routes.users);
    app.use("/models", routes.models);

}