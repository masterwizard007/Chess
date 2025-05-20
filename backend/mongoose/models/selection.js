const mongoose = require('mongoose');

const selectionSchema = new mongoose.Schema({
    itemSelected: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
})

const Selection = mongoose.model('Selection', selectionSchema);

module.exports = Selection;

