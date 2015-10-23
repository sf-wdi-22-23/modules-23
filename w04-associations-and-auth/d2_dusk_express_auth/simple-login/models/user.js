var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcrypt');

var UserSchema = new Schema({
  email: String,
  passwordDigest: String
});

UserSchema.statics.createSecure = function (email, password, callback) {
  // `this` references our schema
  // store it in variable `user` because `this` changes context in nested callbacks

  var user = this;

  // hash password user enters at sign up
  bcrypt.genSalt(function (err, salt) {
    console.log('salt: ', salt);  // changes every time
    bcrypt.hash(password, salt, function (err, hash) {

      // create the new user (save to db) with hashed password
      user.create({
        email: email,
        passwordDigest: hash
      }, callback);
    });
  });
};


// authenticate user (when user logs in)
UserSchema.statics.authenticate = function (email, password, callback) {
  // find user by email entered at log in
  this.findOne({email: email}, function (err, foundUser) {
    console.log(foundUser);

    // throw error if can't find user
    if (!foundUser) {
      console.log('No user with email ' + email);
      callback("Error: no user found", null);  // better error structures are available, but a string is good enough for now
    // if we found a user, check if password is correct
    } else if (foundUser.checkPassword(password)) {
      callback(null, foundUser);
    } else {
      callback("Error: incorrect password", null);
    }
  });
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  // run hashing algorithm (with salt) on password user enters in order to compare with `passwordDigest`
  return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);

// export user model
module.exports = User;