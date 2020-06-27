const Models = require("../model");

// TO DO - export the functionality

module.exports = {
    get: {
        home(req, res, next) {
            res.status(200).render('home.hbs');
            // next();
        },
    },
    post: {

    }
}