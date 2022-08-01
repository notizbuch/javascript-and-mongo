const { MongoClient } = require("mongodb");
//const ObjectId = require('mongodb').ObjectId;
const { EJSON } = require('bson');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


var fs = require('fs');




async function run() {

    let jsonData;
    let filepath = "json.json";

    // await new Promise(resolve => setTimeout(resolve, 1000));

      await client.connect();
      // await client.db("admin").command({ ping: 1 });
      // console.log("Connected successfully to server");

      const db = await client.db("u");
      
      const coll = await db.collection("u");


      fs.readFile(filepath, 'utf8', function (err, data) {
        jsonData = EJSON.parse(data); 
        console.log(jsonData);
        coll.insertOne(jsonData);
     });

}

run()
