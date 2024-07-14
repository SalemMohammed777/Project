const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const userSchema = new Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  PhoneNumber: String,
  Age: String,
  Gender: String,
  Country: String,
}, { timestamps: true });

// Create a model based on that schema
const User = mongoose.model("customer", userSchema);

module.exports = User

// define the Schema (the structure of the article)







