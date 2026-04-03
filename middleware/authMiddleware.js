const jwt=require("jsonwebtoken");
const SECRET = "hmm.....";
const authMiddleware=(req,res,next)=>{
    try{
        const token=req.cookies.token;
     if(!token){
        return res.status(401).send("not logged in");
     }

     const verify=jwt.verify(token,SECRET);

     req.user=verify;
     console.log(req.user);
     next();
    }catch(err){
        console.log(err);
       return res.status(401).send("Invalid token");
        next();
    }
}

module.exports=authMiddleware;