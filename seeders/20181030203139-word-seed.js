'use strict';
const FILE_PATH = 'fixtures/abridged_word_list.txt';
const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
        let wordObjects = [];
        let text = fs.readFileSync(FILE_PATH, 'utf8');
        wordObjects = text.split('\n');
        wordObjects = wordObjects.map(x=> x={value: x});

      return queryInterface.bulkInsert('Words', wordObjects, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Words', null, {});
  }
};
