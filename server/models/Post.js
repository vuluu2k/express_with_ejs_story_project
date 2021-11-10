const mongoose = require('mongoose') ;
const { Schema } = mongoose;

  const PostSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    description:String,
    imgUrl:String
    
  }, 
  {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: true
  });

  module.exports = mongoose.model('Post',PostSchema);

    