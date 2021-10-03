import { Task } from "../domain/Task";
const { GetTasksQuery } = require("../queries/GetTasksQuery");

export class TasksController {
  getTasksQuery: GetTasksQuery;

  constructor(query: GetTasksQuery) {
    this.getTasksQuery = query;
  }

  allTasks(): Task[] {
    return this.getTasksQuery.getTasks();
  }
}