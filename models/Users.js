var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  emailaddress: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
