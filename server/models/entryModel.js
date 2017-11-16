const mongoose = require('mongoose');
const entriesSchema = require('../sacmes/entryScames');

let Entries = mongoose.model('Entries',entriesSchema);

module.exports = Entries;
