const {Pool}=require("pg");
const pool= new Pool({
    user:"postgres",
    database:"postgres",
    host:"localhost",
    password:"Ayush@5266",
    port:5432,
});

pool.connect();
module.exports=pool;


