const express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://readonly:F0615g123@dictcluster-gwgtc.mongodb.net/test?retryWrites=true&w=majority"
const DATABASE_NAME = "MongoDict";

var app = express();

const cors = require('cors')
app.use(cors({origin: '*'}))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.post('/getword', (req, res) => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, }, (error, db) => {
        if(error) {
            throw error;
        }
        console.log('MySql connected...')
        response = {
        word:req.body.word
    }
    let database = db.db(DATABASE_NAME);
    let query = `db.users.find({"entry": "${response.word}"})`
    database.collection("FirstTable").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
    })
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));