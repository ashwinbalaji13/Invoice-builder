import express from 'express';
let app=express();
app.get('/',(req,res)=>{
  
  

  
  
    res.json({
        mes:"welcome"
    })
})
app.listen(3000,()=>{
console.log("listening to port 3000");
})