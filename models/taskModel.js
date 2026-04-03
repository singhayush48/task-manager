const pool=require("../db/db");


const createTask=async(title,description,userid)=>{
return await pool.query("insert into tasks(title,description,user_id) values($1,$2,$3) returning *",[title,description,userid]);
};

const getTask=async(userid)=>{
    return pool.query("select * from tasks where user_id=($1)",[userid]);
}

const updateTask=async(id,completed)=>{
    return await pool.query("update tasks set completed=$1 where id=$2 returning *",[completed,id]);
};

const deleteTask=async(id)=>{
    return await pool.query("delete from tasks where id=$1 returning *",[id]);
}

module.exports=[createTask,getTask,updateTask,deleteTask];