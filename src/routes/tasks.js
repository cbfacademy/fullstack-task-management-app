const express = require("express");
const { TasksController } = require("../controllers/TasksController");
const { TasksRepository } = require("../repositories/TasksRepository");
const { GetTasksQuery } = require("../queries/GetTasksQuery");
const { CreateTaskCommand } = require("../commands/CreateTaskCommand");
const { CreateTaskController } = require("../controllers/CreateTaskController");
const { UpdateTaskCommand } = require("../commands/UpdateTaskCommand");
const { UpdateTaskController } = require("../controllers/UpdateTaskController");
const { DeleteTaskCommand } = require("../commands/DeleteTaskCommand");
const { DeleteTaskController } = require("../controllers/DeleteTaskController");
const router = express.Router();

// Get all tasks
router.get('/tasks', async (req,res) => {
  const tasksRepository = new TasksRepository();
  const query = new GetTasksQuery(tasksRepository);
  const controller = new TasksController(query);
  const tasks = await controller.allTasks();
  return res.json(tasks);
});

// Create a task
router.post('/tasks', async (req,res) => {
  const tasksRepository = new TasksRepository();
  const command = new CreateTaskCommand(tasksRepository);
  const controller = new CreateTaskController(command);
  await controller.create(req);
  return res.sendStatus(201);
});

// Update a task.
router.put('/tasks/:id', async (req,res) => {
  const tasksRepository = new TasksRepository();
  const command = new UpdateTaskCommand(tasksRepository);
  const controller = new UpdateTaskController(command);
  await controller.update(req);
  return res.sendStatus(204);
});

// Delete a task.
router.delete('/tasks/:id', async (req,res) => {
  const tasksRepository = new TasksRepository();
  const command = new DeleteTaskCommand(tasksRepository);
  const controller = new DeleteTaskController(command);
  await controller.delete(req);
  return res.sendStatus(204);
});

module.exports = router;