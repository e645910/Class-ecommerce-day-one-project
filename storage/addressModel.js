'use strict';
var mongoose = require('mongoose');
var Customer = require('./customerModel');
var Tag = require('./tagModel');

var Schema = mongoose.Schema;
var schema = new Schema({
kind: { type: String, required: true, enum: ['Billing', 'Shipping', 'Both'], default: 'Both' },
  address: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  active: { type: Boolean, default: true },
  customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  tags: [{type: Number, ref: 'Tag'}]
});

module.exports = mongoose.model('Address', schema);