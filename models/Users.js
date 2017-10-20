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
  data: {
    type: String
  },
  answers: {
    type: String
  },
  date: {
    type: Date
  }
});


var Users = mongoose.model("Users", UserSchema);
module.exports = Users;
