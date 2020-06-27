const mongoose = require('mongoose');
const { Schema, model: User } = mongoose;
const { String, Number, ObjectId} = Schema.Types;

const userSchema = new Schema ({

});

module.exports = new User("User", userSchema);