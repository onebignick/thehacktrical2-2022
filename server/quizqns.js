const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    'mongodb+srv://admin:root@cluster0.fszmwax.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("shark_stuff");
        const coll = db.collection("qn_list");
        // insert code goes here
        const qns = [
            { name: "What is the biggest shark?", guess1: "Mako Shark", guess2: "Great White Shark", guess3: "Basking Shark", answer: "Whale Shark" },
            { name: "How many bones does a shark have?", guess1: "200", guess2: "478", guess3: "145", answer: "None" },
            { name: "When do sharks learn how to attack?", guess1: "When they're 1 year old", guess2: "When they're a month old", guess3: "When they hatch", answer: "When they're still embryos" }
        ];
        const result = await coll.insertMany(qns);
        // display the results of your operation
        console.log(result.insertedIds);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);