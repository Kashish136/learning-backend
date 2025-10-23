const http = require("http");
const fs = require("fs");

const url = require("url");



const express = require("express"); // using express.js fpr bulding servers
const app = express();
app.get('/' , (req , res) => {
    return res.send("Hello from Home Page !!")

});


app.get("/about" , ( req , res) => {

    return res.send("Hello From About Page !!!" + "hey " +  req.query.name + "you are " +  req.query.age);
});

app.listen(8000 , () => console.log("Server Statrted !!"));

//const myServer = http.createServer(app);
//myServer.listen(8000 , () => console.log("Server Started !!"));


// for example :- if i send the request which is localhost:8000/about?name=piyush&age=23































// we are now building an app using express module , using express we will generalize an app.....
// const myServer = http.createServer(  (req , res) => {

//     if(req.url == "/favicon.ico") return res.end();
//     const log = `${Date.now()} : ${req.method} ${req.url} New Req Recieved\n`;
//     const myUrl = url.parse(req.url , true);
    
//     fs.appendFile("log.txt" , log , (err,data) => {
//     switch(myUrl.pathname){// in case of multiple exams pages , we have different urls
//         case "/":
//         if(req.method == 'GET')   res.end('HomePage') ;
//         res.end("Homepage");
//         break;
//   // try performing non-blocking task , else u will 
//   // end up blocking the thread pool , and hence the users will not be able to get the good access     
//     case "/about" : 
//     const username = myUrl.query.myname
    
//     res.end(`hi im a dick , and my name is ${username}`);
//         break;

//     case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are your results for"+search);
//     case "/signup":
//         if( req.method == "GET") res.end("This is Signup Form");
//         else if( req.method == "POST"){
//             // we will be performing a DB query
//             res.end("Success");
//         }
//         default:
//         res.end("404 Not found")  ;

//     }
//     console.log(req);
// });
// }); // we are creating a server of  request this type , in which if we send a request
// // we can extract the info of the user , and get complete information about the  user and the data we want to store
// myServer.listen(8000,()=> console.log("Server Statrted !!"));



// // we have a well define protocol , then we have a domain , then we have a path which represents the path we want to traverse 
// // and then after that it represents the final point where we wnt to reach and alonh with that we can enale query parametres also