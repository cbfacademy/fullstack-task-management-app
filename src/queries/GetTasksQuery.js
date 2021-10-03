import { Task } from "../domain/Task";
const { TasksRepository } = require("../repositories/TasksRepository");

export interface GetTasksQuery {
  getTasks(): Task[];
}

export class SimpleGetTasksQuery implements GetTasksQuery {
  repository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.repository = repository;
  }

  getTasks(): Task[] {
    return this.repository.getAll();
  }
}