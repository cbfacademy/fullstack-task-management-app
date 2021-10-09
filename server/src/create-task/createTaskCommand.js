import { TasksRepository } from "../repositories/tasksRepository";
import { Task } from "../domain/task";

export interface CreateTaskCommand {
  execute(title: string, description: string, completed: boolean): void;
}

export class SimpleCreateTaskCommand implements CreateTaskCommand {
  repository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.repository = repository;
  }

  execute(title, description, completed): void {
    const newTask = new Task(title, description, completed);
    this.repository.save(newTask);
  }
}