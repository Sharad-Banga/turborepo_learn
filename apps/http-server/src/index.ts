
import express  from "express";

const app = express();



app.get("/*",(req ,res)=>{
  res.json({
    "message" : "health good"
  })
});

app.listen(3002);