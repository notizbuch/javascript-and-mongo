const { MongoClient } = require("mongodb");
//const ObjectId = require('mongodb').ObjectId;
const { EJSON } = require('bson');
const uri =
    "mongodb://localhost:21017/?maxPoolSize=20&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        const db = client.db("aggregation");
        const coll = db.collection("restaurants");

        let myqueryobject2 = EJSON.parse('{"$match": {"_id":{"$oid":"61bd220ca3b65ff594858f91"}}}');

        const pipeline2 = [
            myqueryobject2,
            { $group: { _id: "$stars", count: { $sum: 1 } } }
        ];

        const aggCursor2 = coll.aggregate(pipeline2);
        for await (const doc of aggCursor2) {
            console.log(doc);
        }

    } finally {
        await client.close();
    }
}
run().catch(console.dir);
