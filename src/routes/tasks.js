const express = require("express");
const { TasksController } = require("../controllers/TasksController");
const { InMemoryTasksRepository } = require("../repositories/TasksRepository");
const { SimpleGetTasksQuery } = require("../queries/GetTasksQuery");
const { SimpleCreateTaskCommand } = require("../commands/CreateTaskCommand");
const { CreateTaskController } = require("../controllers/CreateTaskController");
const { SimpleUpdateTaskCommand } = require("../commands/UpdateTaskCommand");
const { UpdateTaskController } = require("../controllers/UpdateTaskController");
const { SimpleDeleteTaskCommand } = require("../commands/DeleteTaskCommand");
const { DeleteTaskController } = require("../controllers/DeleteTaskController");
const router = express.Router();

const tasksRepository = new InMemoryTasksRepository();

// Get all tasks
router.get('/tasks', async (req,res) => {
  const query = new SimpleGetTasksQuery(tasksRepository);
  const controller = new TasksController(query);

  const tasks = controller.allTasks();
  return res.json(tasks);
});

// Create a task
router.post('/tasks', async (req,res) => {
  const command = new SimpleCreateTaskCommand(tasksRepository);
  const controller = new CreateTaskController(command);

  controller.create(req.body);
  return res.sendStatus(201);
});

// Update a task.
router.put('/tasks/:id', async (req,res) => {
  const command = new SimpleUpdateTaskCommand(tasksRepository);
  const controller = new UpdateTaskController(command);

  controller.update(req);
  return res.sendStatus(204);
});

// Delete a task.
router.delete('/tasks/:id', async (req,res) => {
  const command = new SimpleDeleteTaskCommand(tasksRepository);
  const controller = new DeleteTaskController(command);

  controller.delete(req);
  return res.sendStatus(204);
});

module.exports = router;