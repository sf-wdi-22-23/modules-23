/*
 * POST MODEL
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    created_at: { 
      type: Date, 
      default: Date.now() 
    },
    updated_at: { type: Date },
    content: { 
      type: String, 
      required: true, 
      trim: true 
    }
});

// MIDDLEWARE
PostSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

// export post model
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
