//Lets require/import the HTTP module
var http = require('http');
var httpdispatcher = require('httpdispatcher');
var path = require("path");
var url = require("url");
var filesys = require("fs");
var mydbAgent = require("./db.js");
var nodemailer = require('nodemailer');
var postman = require("./mail.js");

//Lets define a port we want to listen to
const PORT=9090; 

var dispatcher = new httpdispatcher();

mydbAgent.connect();

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});


//Lets use our dispatcher
function handleRequest(request, response){
    //response.setHeader('Content-Type', 'application/json');
    if (request.url === '/'){
        dispatcher.dispatch(request, response);
    }
    else{
        var my_path = url.parse(request.url).pathname;
        var full_path = path.join(process.cwd(),my_path);
        filesys.exists(full_path,function(exists){
            console.log(full_path);
            if(!exists){
                try {
                    //log the request on console
                    console.log(request.url);
                    //Disptach
                    dispatcher.dispatch(request, response);
                } catch(err) {
                    console.log(err);
                }
            }
            else{
                filesys.readFile(full_path, "binary", function(err, file) {  
                    if(err) {  
                        response.writeHeader(500, {"Content-Type": "text/plain"});  
                        response.write(err + "\n");  
                        response.end();  
                    
                    }  
                    else{
                        response.writeHeader(200);
                        console.log("file available " +full_path);
                        response.write(file, "binary");  
                        response.end();
                    }
                        
                });
            }
        });
    }
}


//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStaticDirname(__dirname);
dispatcher.setStatic('../.');

dispatcher.onGet("/", function(req, res) {
    filesys.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
    console.log("we reached first page");
    //res.end('Page One');
});  

//A sample GET request    
var tweetNo = 0;
const tweets = ["xyz is working", "I am a devil", "My name is Monu",
                "i am in a pinch"]

dispatcher.onGet("/arpi", function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var toSend = [];
    toSend.push(tweets[tweetNo]);
    tweetNo = (tweetNo + 1) % tweets.length;
    res.end(JSON.stringify({ a: toSend }));
});    

//A sample POST request
dispatcher.onPost("/sendmail", function(req, res) {
    console.log("------------------------ My Server ----------------");
    console.log(req.body);
    var json = JSON.parse(req.body);
    mydbAgent.insert(json);
    postman.send(json);
    console.log(json);
    console.log("-------------------------------------------------------------");
});

//Node JS Process termination
function exitHandler(options, err) {
    mydbAgent.close();
    process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));


