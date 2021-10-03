import { TasksRepository } from "../repositories/TasksRepository";
import { Task } from "../domain/Task";

export interface CreateTaskCommand {
  execute(title: string, description: string): void;
}

export class SimpleCreateTaskCommand implements CreateTaskCommand {
  repository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.repository = repository;
  }

  execute(title, description): void {
    const newTask = new Task(title, description);
    this.repository.save(newTask);
  }
}