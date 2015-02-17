'use strict';
var OrderModel = require('./../models/orderModel')

module.exports.find =function(query){
	var dfd = q.defer();
	OrderModel.find(query, function(err, results){
		if (!err){
			dfd.resolve(results){
		}else {
			dfd.reject(err)
		}
	});
	return dfd.promise;
};
	
