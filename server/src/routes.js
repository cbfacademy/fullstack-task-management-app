const express = require("express");
const { TasksController } = require("./get-tasks/tasksController");
const { InMemoryTasksRepository } = require("./repositories/tasksRepository");
const { SimpleGetTasksQuery } = require("./get-tasks/getTasksQuery");
const { SimpleCreateTaskCommand } = require("./create-task/createTaskCommand");
const { CreateTaskController } = require("./create-task/createTaskController");
const { SimpleUpdateTaskCommand } = require("./update-task/updateTaskCommand");
const { UpdateTaskController } = require("./update-task/updateTaskController");
const { SimpleDeleteTaskCommand } = require("./delete-task/deleteTaskCommand");
const { DeleteTaskController } = require("./delete-task/deleteTaskController");
const router = express.Router();

const tasksRepository = new InMemoryTasksRepository();

router.get('/tasks', async (req,res) => {
  const query = new SimpleGetTasksQuery(tasksRepository);
  const controller = new TasksController(query);

  const tasks = controller.allTasks();
  return res.json(tasks);
});

router.post('/tasks', async (req,res) => {
  const command = new SimpleCreateTaskCommand(tasksRepository);
  const controller = new CreateTaskController(command);

  controller.create(req.body);
  return res.sendStatus(201);
});

router.put('/tasks/:id', async (req,res) => {
  const command = new SimpleUpdateTaskCommand(tasksRepository);
  const controller = new UpdateTaskController(command);

  const updateRequest = { id: Number(req.params.id), ...req.body };
  controller.update(updateRequest);
  return res.sendStatus(204);
});

router.delete('/tasks/:id', async (req,res) => {
  const command = new SimpleDeleteTaskCommand(tasksRepository);
  const controller = new DeleteTaskController(command);

  controller.delete(Number(req.params.id));
  return res.sendStatus(204);
});

module.exports = router;