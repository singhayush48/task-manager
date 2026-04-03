const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const verifyToken = require("../middleware/authMiddleware");
const valiadteTask=require("../middleware/validateTask")


router.post("/", verifyToken,valiadteTask, taskController.createTasks);
router.get("/", verifyToken, taskController.getTasks);
router.put("/:id", verifyToken, taskController.updateTasks);
router.delete("/:id", verifyToken, taskController.deleteTasks);


module.exports = router;