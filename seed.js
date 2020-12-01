const fs = require('fs').promises;
const { dbConnect } = require('./dbconnect.js');
const mongoose = require('mongoose');
const { Word } = require('./models/word.js');
dbConnect(); 

async function seed(path, data) {
  let wordsFromFile = await fs.readFile(path, 'utf8');
  let array = String(wordsFromFile).split('\n');
  await Promise.all(array.map(el => {
    let obj = { value: el };
    const word = new Word(obj);
    return word.save();
  }));
}
let arrayWords = seed('./fixtures/abridged_word_list.txt')
  
 
  
// mongoose.connection.close(async() => console.log('Connection closed'));


