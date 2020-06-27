// Insert the EVENT model
const User = require("../users/User");
const { validationResult } = require('express-validator');
const Model = require("./Model");

module.exports = {
    get: {
        createCourse(req, res) {
            const isLoggedIn = (req.user !== undefined);
            res.render("courses/create-course.hbs", {
                isLoggedIn,
                username: req.user ? req.user.username : null
            });
        }
    },
    post: {
        createCourse(req, res) {
            const {title, description, imageUrl, isPublic} = req.body;        // isPublic: "on" || null
            console.log(req.body);


            res.redirect("/");
        }
    }
}