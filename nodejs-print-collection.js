// db.getSiblingDB('hello').world.insert({"message":"testing"})

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
	if (err) throw err;
	let db = client.db('hello');
	db.collection('world').find().toArray(function (err, result) {
		if (err) throw err;
		console.log(result);
		client.close();
	});
});
