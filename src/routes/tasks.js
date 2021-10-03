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

// Get all tasks
router.get('/tasks', async (req,res) => {
  const tasksRepository = new InMemoryTasksRepository();
  const query = new SimpleGetTasksQuery(tasksRepository);
  const controller = new TasksController(query);
  const tasks = controller.allTasks();
  return res.json(tasks);
});

// Create a task
router.post('/tasks', async (req,res) => {
  const tasksRepository = new InMemoryTasksRepository();
  const command = new SimpleCreateTaskCommand(tasksRepository);
  const controller = new CreateTaskController(command);
  await controller.create(req);
  return res.sendStatus(201);
});

// Update a task.
router.put('/tasks/:id', async (req,res) => {
  const tasksRepository = new InMemoryTasksRepository();
  const command = new SimpleUpdateTaskCommand(tasksRepository);
  const controller = new UpdateTaskController(command);
  await controller.update(req);
  return res.sendStatus(204);
});

// Delete a task.
router.delete('/tasks/:id', async (req,res) => {
  const tasksRepository = new InMemoryTasksRepository();
  const command = new SimpleDeleteTaskCommand(tasksRepository);
  const controller = new DeleteTaskController(command);
  await controller.delete(req);
  return res.sendStatus(204);
});

module.exports = router;