import { TasksRepository } from "../repositories/tasksRepository";

export interface DeleteTaskCommand {
  execute(id: number): void;
}

export class SimpleDeleteTaskCommand implements  DeleteTaskCommand {
  repository: TasksRepository;

  constructor(repository: TasksRepository) {
    this.repository = repository;
  }

  execute(id): void {
    this.repository.delete(id)
  }
}