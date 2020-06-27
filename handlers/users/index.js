// Insert the EVENT model
const User = require("../users/User");
const jwt = require('../../utils/jwt');
const { cookie } = require('../../config/config');

module.exports = {
    get: {
        login(req, res, next) {
            res.status(200).render("users/login.hbs")
        },
        register(req, res, next) {
            res.status(200).render("users/register.hbs")
        },
        logout(req, res, next) {
            req.user = null;
            res.clearcookie(cookie).status(300).redirect("/home/")
        },
    },
    post: {
        login(req, res, next) {
            const { username, password } = req.body;
            console.log(username, password);
            User.findOne({ username }).then((user) => {
                return Promise.all([user.passwordsMatch(password), user])
            }).then(([match, user]) => {
                if (!match) {
                    next(err);
                    return;
                }
                const token = jwt.createToken(user);

                res.status(201).cookie(cookie, token, { maxAge: 3600000 }).redirect("/home/");
            })
        },
        register(req, res, next) {
            const { username, password, repassword } = req.body;
            if (password !== repassword) {
                res.render("users/register.hbs", {
                    message: "Passwords do not match!",
                    oldInput: { username, password, repassword }
                });
                return;
            }
            User.findOne({ username })
                .then((currentUser) => {
                    if (currentUser) { throw new Error("The given username is already used!") }
                    return User.create({ username, password })
                }).then((createdUser) => {
                    res.redirect("/user/login");
                }).catch((err) => {
                    res.render("users/register.hbs", {
                        message: err.message,
                        oldInput: { username, password, repassword }
                    })
                })
        }
    }
}