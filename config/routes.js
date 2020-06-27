const routes = require("../routes");        // exported from index.js 

module.exports = (app) => {
    // TO DO - All the main routes the application I have
    app.use("/", routes.home);            // parent routes      
    app.use("/users", routes.users);

    app.use("/models", routes.models);

}