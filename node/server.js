const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
// MongoDB connection setup
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Connect to the MongoDB server
async function connect() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');
    } catch (err) {
        console.error('Error connecting to MongoDB server', err);
        process.exit(1);
    }
}

app.get('/insert', async function (req, res){
    try {
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('quizang');
        const collection=db.collection('asign');
        const result = await collection.insertOne(req.query);
        data={ status:true,message: "Inserted Successfully" };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
		res.json(data);
    }
});

app.get('/insert1', async function (req, res){
  try {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
      const db = client.db('quizang');
      const collection=db.collection('users');
      const result = await collection.insertOne(req.query);
      data={ status:true, message: "Inserted Successfully" };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "Insert Failed" };
  res.json(data);
  }
});
app.get('/insertscore', async function (req, res){
  try {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
      const db = client.db('quizang');
      const collection=db.collection('userscore');
      const result = await collection.insertOne(req.query);
      data={ status:true, message: "Inserted Successfully" };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "Insert Failed" };
  res.json(data);
  }
});
app.get('/insert2', async function (req, res){
  try {
    console.log("Request Query Parameters:", req.query);
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  const db = client.db('quizang');
  const collection=db.collection('users');
  var doc={name:req.query.username,pw:req.query.pw};
	const user = await collection.findOne(doc);
  console.log(user);
  if(user!=null){
    data={ status:true,message: "Login Successful" };
    res.json(data);
  }
  
  }catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "Login Failed" };
  res.json(data);
  }
});

app.get('/insert3', async function (req, res){
  try {
    console.log("Request Query Parameters:", req.query);
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  const db = client.db('quizang');
  const collection=db.collection('asign');
  
  var doc={name:req.query.username,pw:req.query.pw};
	const user = await collection.findOne(doc);
  console.log(user);
  if(user!=null){
    data={ status:true,message: "Login Successful" };
    res.json(data);

  }
  }catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "Login Failed" };
  res.json(data);
  }
});




app.get('/update', async function (req, res){
  try {
    console.log("Request Query Parameters:", req.query);
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  const db = client.db('quizang');
  const collection=db.collection('users');
  const email=req.query.email;
  const newpass=req.query.newpass;
  const oldpass=req.query.oldpass;
  
  const result = await collection.updateOne({name:email,pw: oldpass},{$set:{pw:newpass}});

  if (result.modifiedCount > 0)
    data = { status: true, message: "Updated Successfully", noOfDoc: result.modifiedCount };
  else
    data = { status: false, message: "No data found or old password is incorrect", noOfDoc: result.modifiedCount };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "update action failed" };
  res.json(data);
  }
});


app.get('/delete', async function (req, res){
  try {
    console.log("Request Query Parameters for delete:", req.query);
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  var doc={name:req.query.name};
	const db=client.db("quizang");
	const coll=db.collection("users");
	
 console.log("Request Query Parameters1 for delete:", doc);
  
  
  var result = await coll.deleteOne(doc);
  console.log("Request Query Parameters2 for delete:",doc);
  if (result.deletedCount > 0)
    data = { status: true, message: "Deleted Successfully", noOfDoc: result.deletedCount };
  else
    data = { status: false, message: "No data found ", noOfDoc: result.deletedCount };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "update action failed" };
  res.json(data);
  }
});

app.get('/findAll', async function (req, res){
  try {
  res.setHeader('content-type','application/json')
  res.setHeader("Access-Control-Allow-Origin","*");
  const db = client.db('quizang');
  const collection=db.collection('users');
  
  const result = await collection.find({},{_id:0,email:1,reviewText:1,rating:1}).toArray();
  data = { status: true, message: "Listed Successfully", list:result };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "Action failed" };
  res.json(data);
  }
});

app.get('/find1', async function (req, res) {
  try {
    res.setHeader('content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    const db = client.db('quizang');
    const collection = db.collection('users');
    const searchName = req.query.searchName;

    // Use findOne instead of find to retrieve only one document
    const result = await collection.findOne({ name: searchName }, { _id: 0, name: 1, phno: 1, pw: 1 });

    if (result) {
      const data = { status: true, message: "Listed Successfully", person: result }; // Return the matching document
      res.json(data);
    } else {
      const data = { status: false, message: "No matching record found" };
      res.json(data);
    }
  } catch (err) {
    console.error('Error ', err);
    res.status(500).json({ status: false, message: "Action failed" });
  }
});

app.get('/find2', async function (req, res) {
  try {
    res.setHeader('content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    const db = client.db('quizang');
    const collection = db.collection('users');
    const searchName = req.query.searchName;

    // Use findOne instead of find to retrieve only one document
    const result = await collection.findOne({ name: searchName }, { _id: 0, name: 1, phno: 1, pw: 1 });

    if (result) {
      const data = { status: true, message: "Listed Successfully", person: result }; // Return the matching document
      res.json(data);
    } else {
      const data = { status: false, message: "No matching record found" };
      res.json(data);
    }
  } catch (err) {
    console.error('Error ', err);
    res.status(500).json({ status: false, message: "Action failed" });
  }
});


app.get('/checkUnameAvailability', async (req, res) => {
  

  try {
    res.setHeader('content-type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    const db = client.db('quizang');
    const collection = db.collection('users');
    const username = req.query.username;

    const existingUser = await collection.findOne({ name: username });
    if (existingUser) {
      res.json({ available: false }); 
    } else {
      res.json({ available: true }); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error checking email availability.');
  }
});

// Start the server 
app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
	connect(); // Connect to MongoDB when the server starts
});