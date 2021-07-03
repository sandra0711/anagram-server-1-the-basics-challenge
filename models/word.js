const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  value: String
});

wordSchema.statics.anagramsFind = async function (val) {
  const anagrams = await this.find();
  return anagrams.filter(el => el.value.toLowerCase().split('').sort().join('') === val.toLowerCase().split('').sort().join(''))
};
const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
