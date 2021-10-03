import { TasksRepository } from "../repositories/TasksRepository";

export interface UpdateTaskCommand {
  execute(id: number, title?: string, description?: string, completed?: false): void;
}

export class SimpleUpdateTaskCommand implements UpdateTaskCommand {
  repository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.repository = repository;
  }

  execute(id: number, title?: string, description?: string, completed?: false): void {
    const task = this.repository.getBy(id);
    task.title = title ? title : task.title;
    task.description = description ? description : task.description;
    task.completed = completed ? completed : task.completed;
    this.repository.save(task);
  }
}