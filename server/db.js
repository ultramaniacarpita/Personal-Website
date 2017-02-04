var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;

var connector = "mongodb://127.0.0.1:27017/test";
var myCollection = "arpita";
var dbAgent = {
         db : null,
    connect : function(){
        MongoClient.connect(connector, function(err, db) {
            if(err) {
                console.log("error in connecting to database");
                throw err;
            }

            console.log("database connection is successful");

            dbAgent.db = db;

        });
    },
    insert : function(json){
        var db = dbAgent.db;

        if(db != null){
            console.log("insert " + json);
            var collection = db.collection(myCollection);
                collection.insert(json, function(err, docs) {
                    collection.count(function(err, count) {
                        console.log(format("count = %s", count));
                });
            });
        }
    },
    find : function(){
        var db = dbAgent.db;

        if(db != null){

            var collection = db.collection(myCollection);

            collection.find().toArray(function(err, results) {
                console.dir(results);
                return results;
            });
        }
    },
    close : function(){
        var db = dbAgent.db;

        if(db != null){
            db.close();
            console.log("database is closed");
            dbAgent.db = null;
        }
    }
}

var mydbAgent = dbAgent;

module.exports = mydbAgent;










