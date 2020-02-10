const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String },
  name: { type:String},
  description: { type: String },
  hobbies : { type:String },
  age :{type:Number},
  image:{type:Buffer }
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;