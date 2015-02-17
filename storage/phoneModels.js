"use strict";
var mongoose = require('mongoose');
var Customer = require('./customerModel');
var Phone = require('./phoneModel');

var Schema = mongoose.Schema;
var schema = new Schema({
  kind: { type: String, enum: ['mobile', 'work', 'home', 'other'] },
  phoneNumber: { type: String, required: true },
  active: { type: Boolean, default: true },
  customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  tags: [{type: Number, ref: 'Tag'}]
};

module.exports = mongoose.model('Phone', schema);