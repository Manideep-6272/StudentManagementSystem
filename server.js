const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const FILE_URL = "./db.json";
function readFile() {
    let data = fs.readFileSync(FILE_URL);
    return JSON.parse(data);
}

function writeFile(data) {
    fs.writeFileSync(FILE_URL, JSON.stringify(data, null, 2));
}

app.get("/students",(req,res)=>{
    let data = readFile();
    res.status(200).json(data);
})
app.post("/register", (req, res) => {
    // console.log(req.body);

    let data = readFile();
    data.users.push(req.body);
    writeFile(data);
    res.status(200).json({
        message: "Registration successful"
    });
});

app.get("/login",(req,res)=>{
    let data = readFile();
    res.status(200).json(data);
})

app.post("/students",(req,res)=>{
    let body = req.body;
    // console.log(body);
    let data = readFile();
    data.students.push(body);
    // console.log(data);
    writeFile(data);
    res.status(200).json({message : "Student added"});
})

app.listen(4000, () => {
    console.log("Server started...");
});