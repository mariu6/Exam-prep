const Model = require("../model/Model");

module.exports = {
    get: {
        home(req, res) {
            Model.find({ isPublic: true }).lean().then((courses) => {
                const isLoggedIn = (req.user !== undefined);
                // console.log(courses);
                res.render('home.hbs', {
                    isLoggedIn,                                      // isLoggedIn: isLoggedIn, 
                    username: req.user ? req.user.username : "",
                    courses                                         // hbs each
                });
            })

        }

    },
    post: {

    }
};