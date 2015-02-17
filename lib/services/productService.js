'use strict';
var ProductModel = require('./../models/productModel');
var q = require('q');

module.exports.save = function(order){
	var dfd = q.defer();
	ProductModel(order).save(function(err, res){
		if(!err){
			did.resolve(res);
		}else {
			dfd.reject(err);
		}
	});
	return dfd.promise;
};

module.exports.find = function(query){
	var dfd = q.defer();
	ProductModel.find(query, function(err, results){
		if(!err){
			dfd.resolve(results)
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};