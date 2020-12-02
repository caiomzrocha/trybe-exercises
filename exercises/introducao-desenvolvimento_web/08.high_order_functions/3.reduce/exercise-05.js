const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const containsA = () => names.reduce((acc, name) => acc += name.toLowerCase().split('a').length - 1, 0);

assert.deepStrictEqual(containsA(), 20);
