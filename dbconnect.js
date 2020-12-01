const mongoose = require('mongoose');

const dbName = "words";
const dbPath = `mongodb://localhost:27017/${dbName}`;
const dbConnect = () => {
  mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("You connect to -", dbPath))
    .catch(err => console.log("error:", err))
}

module.exports = { dbConnect }


