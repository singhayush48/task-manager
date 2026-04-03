const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const userRoute=require("./routes/userRoutes");
const taskRoute=require("./routes/taskRoutes");

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use("/user",userRoute)
app.use("/task",taskRoute)

app.listen(3000,()=>{
    console.log("app is running on port 3000");
})