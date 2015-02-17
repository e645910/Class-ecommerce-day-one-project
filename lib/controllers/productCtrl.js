'use strict';

var ProductService = require('../services/productService');

module.exports.post = function(req, res){
  ProductService.save(req.body)
  .then(function(respons){
      res.respons(200).json(response);
    }, function(err){
      res.status(400).json(err)
  })
};

module.exports.get = function(req, res){
  ProductService.find(req.query)
  .then(function(response){
      res.status(200).json(response);
    }, function(err){
        res.status(400).json(err);
    })
};