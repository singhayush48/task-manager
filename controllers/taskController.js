const [createTask,getTask,updateTask,deleteTask]=require("../models/taskModel");

const createTasks=async(req,res)=>{
    const {title,description}=req.body;
    const id=req.user.id;
try{
    const result=await createTask(title,description,id);
    res.json(result.rows);
}catch(err){
   
    res.status(404).send("an error occured while creating a task");
}
    
};

const getTasks=async (req,res)=>{
    const id=req.user.id;
    try{
    const result=await getTask(id);
    res.json(result.rows);
}catch(err){
     console.log(err)
    res.status(404).send("an error occured while geeting a task");
}
 
}

const updateTasks=async(req,res)=>{
    const id = req.params.id;
  const { completed } = req.body;

  try {
    const result = await updateTask(id, completed);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send("Error updating task");
  }
}

const deleteTasks = async (req, res) => {
  const id = req.params.id;

  try {
    await deleteTask(id);
    res.send("Task deleted");
  } catch (err) {
    res.status(500).send("Error deleting task");
  }
};

module.exports={createTasks,getTasks,updateTasks,deleteTasks};