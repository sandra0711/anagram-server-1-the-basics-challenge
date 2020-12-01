'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wordSchema = new Schema({
  value: String,
});

wordSchema.statics.anagrams = async function (word) {
  const words = await this.find();
  const anagrams = words.filter((item) =>  item.value.split('').sort().join('') === word.split('').sort().join(''))
  return anagrams;
}







const Word = mongoose.model('Word', wordSchema);
// export Word model.
module.exports = { Word };


