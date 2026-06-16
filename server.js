const http = require('http')
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url == "/"){
        res.write("Welcome to SMS home route");
        res.end();
    }

    if (req.url == "/getStudents"){
        fs.readFile("./db.json","utf8",(err,data)=>{
            if (err){
                res.write("<h1>Error in file reading</h1>");
                return res.end();
            }
            res.write(data);
            res.end();
        })
    }
    if (req.url == "/login"){
        fs.readFile("./db.json","utf8",(err,data)=>{
            if (err){
                res.write("Login error");
                return res.end();
            }
            res.write(data);
            res.end();
        })
    }
});

server.listen(4000,()=>{
    console.log("Server started on port 4000");
})