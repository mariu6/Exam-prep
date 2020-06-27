const Models = require("../model");

// TO DO - export the functionality

module.exports = {
    get: {
        home(req, res) {
            const isLoggedIn = (req.user !== undefined);

            res.status(200).render('home.hbs', {
                isLoggedIn,                                      // isLoggedIn: isLoggedIn, 
                username: req.user ? req.user.username : null
            });
        },

    },
    post: {

    }
}