const express = require("express");
const cors = require("cors");
const db = require("./db")

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async(req, res)=>{
    try{
        const {Name, gender} = req.body;
        const sql = "INSERT INTO `user_info`(`Name`, `gender`) VALUES (?, ?)";
        const result = await db.query(sql, [Name, gender])
        res.json({success:true, id:result.insertId});
        res.json(rows)
    }catch(err){
        res.status(500).json({error:err.user_info})
    }
})


app.get("/", async(req, res)=>{
    try{
        const [rows] = await db.query("SELECT * FROM `user_info` WHERE 1")
            res.json(rows)
        }catch(err){
            res.status(500).json({error:err.user_info})
        }
    
})

app.listen(5000, ()=>{
    console.log("Listening on port http://localhost:5000")
})