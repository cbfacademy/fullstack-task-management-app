import { TasksRepository } from "../repositories/TasksRepository";

export interface CreateTaskCommand {
  execute(title: string, description: string): void;
}

export class SimpleCreateTaskCommand implements CreateTaskCommand {
  constructor(repository: TasksRepository) {
    throw new Error("Not implemented");
  }

  execute(title, description): void {
    throw new Error("Not implemented");
  }
}