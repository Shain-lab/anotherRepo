const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin_shain:r^j+w3MAs5CzWkg@cluster0.npi8q.mongodb.net/classroom?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("classroom").collection("student").insertOne({ name: "Company Inc", address: "Highway 37" }, (err, res)=>{
    if (err) {
    throw err;
    }
    console.log("1 document inserted");
  });
  console.log("connected");
  client.close();
});