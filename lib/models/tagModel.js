'use strict';
var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
    _id: {type: Number, required: true, unique: true}
});

module.exports = mongoose.model("Tag", tagSchema);