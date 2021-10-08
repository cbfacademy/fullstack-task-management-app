import { Task } from "../domain/task";
import { TasksRepository } from "../repositories/tasksRepository";

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