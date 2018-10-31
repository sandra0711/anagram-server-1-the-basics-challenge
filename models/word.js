'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    value: DataTypes.STRING
  }, {});
  Word.associate = function(models) {
    // associations can be defined here
  };
  return Word;
};