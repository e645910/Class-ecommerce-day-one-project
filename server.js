var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost:27017/ecommerce-day-one';

var app = express();
var port = 9002;
//connected

mongoose.connect(mongoUri).json;
mongoose.connection.once('open', function(){
    console.log('Connected to localhost: ' +port+ ' and mongodb localhost:27017');
});

var CustomerCtrl = require('./lib/controllers/customerCtrl');
var productCtrl = require('./lib/controllers/productCtrl');

app.use(bodyParser.json());

app.listen(port, function(){
	console.log('listening on port ' + port);
})

app.post('/api/customer', CustomerCtrl.post);
app.get('/api/customer', CustomerCtrl.get);

app.post('/api/product', productCtrl.post);
app.get('/api/product', productCtrl.get);

// app.get('/api/order', function(req, res){
//   order.find(function(err, docs){
//     if (!err){
//       if(docs.length === 0){
//         res.status(404).send('no doc found')
//       }else {
//         res.status(200).json(docs);
//       }
//     }else {
//       res.status(500).json(err);
//     }
//   })
// })


