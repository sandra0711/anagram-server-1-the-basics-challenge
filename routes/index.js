const express = require('express');
const router = express.Router();

const Word = require('../models/word');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Поиск анаграмм' });
});

router.get('/:param', async function (req, res) {
  let word = req.params.param;
  let anagramsArray = await Word.anagramsFind(word);
  res.render('words/index', { word, anagramsArray })
});

router.post('/words', async function (req, res) {
  res.redirect(`/${req.body.word}`)
});

module.exports = router;
