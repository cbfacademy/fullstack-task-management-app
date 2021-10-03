import { Task } from "../domain/Task";
const { TasksRepository } = require("../repositories/TasksRepository");

export interface GetTasksQuery {
  getTasks(): Task[];
}

export class SimpleGetTasksQuery implements GetTasksQuery {
  constructor(repository: TasksRepository) {
    throw new Error("Not implemented");
  }

  getTasks(): Task[] {
    throw new Error("Not implemented");
  }
}