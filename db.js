const mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost/task',{ useNewUrlParser: true });
let Schema = mongoose.Schema;
let userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});
exports.dbo = mongoose;
exports.userSchema = userSchema;