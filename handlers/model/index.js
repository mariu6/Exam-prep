// Insert the EVENT model
const User = require("../users/User");
const {validationResult} = require('express-validator');
const Model = require("./Model");

module.exports = {
    get: {
        login(req,res,next) {
            res.render("./users/login.hbs")
        }
    },
    post: {
        
    }
}