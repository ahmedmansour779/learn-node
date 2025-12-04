const { MongoClient } = require("mongodb")

const url = "mongodb+srv://ahmedmansour1239:nodejs2025@learn-mongo-db.arxtqmm.mongodb.net/?appName=learn-mongo-db";
const client = new MongoClient(url);

const main = async () => {
    // connect to database
    await client.connect();
    console.log('Connected successfully to server');

    // chose database to interact with
    const db = client.db("learn-node");

    // chose collection
    const collection = db.collection('courses');

    await collection.insertOne({
        title: "new course",
        price: 1000
    })

    // get all data and show as array
    const data = await collection.find().toArray()
    console.log("data is:", data);


    return 'done.';
}

main()