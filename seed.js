const fs = require("fs").promises;

const mongoose = require('mongoose');
const { dbConnect } = require('./dbconnect.js');
const Word = require('./models/word.js');
dbConnect();

// const a = Word.anagramsFind('lemon')
//   .then((data) => console.log(data))


fs.readFile('./fixtures/abridged.txt', 'utf8', (err, data) => {
  if (err) throw err;
  return (data);
})
  .then(data => {
    const reg = /\r\n+/g;
    const array = data.split(reg);
    array.forEach(async el => {
      const wordNew = new Word({ value: el });
      await wordNew.save();
    });
  });
