const express = require('express'); //экспресс
const mongoose = require('mongoose');//монгуз
const dbName = "words";
const dbPath = `mongodb://localhost:27017/${dbName}`;
const dbConnect = () => { mongoose.connect(dbPath, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, })
  .then(() => console.log("You connect to -", dbPath))
  .catch(err => console.log("error:", err))
}
dbConnect();
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();
const { Word } = require('./models/word.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/:param', async function (req, res) {
  console.log('это регпарамс', req.params.param);
  let word = req.params.param;
  let gg = await Word.anagrams(word);

  console.log(gg);
  res.render('words/index', { word, gg })
  

  // Перейти по короткому к соответствующему "длинному" URL
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000);
module.exports = app;
