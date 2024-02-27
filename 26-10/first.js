const { MongoClient } = require("mangodb")
const url = "mongodb://localhost:27017"
const database = "Harohalli"
const client = new MangoClient(url)
async function getdata()
{
    let result = await client.connect()
    let db = result.db(database)
    let collection = db.collection("soE")
    let res1 = await collection.find({}).toArray()
    console.log(res1)
}
getdata()


