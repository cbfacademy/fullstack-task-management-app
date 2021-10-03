import { TasksRepository } from "../repositories/TasksRepository";

export interface UpdateTaskCommand {
  execute(id: number, title?: string, description?: string, completed?: false): void;
}

export class SimpleUpdateTaskCommand implements UpdateTaskCommand {
  constructor(repository: TasksRepository) {
    throw new Error("Not implemented");
  }

  execute(id: number, title?: string, description?: string, completed?: false): void {
    throw new Error("Not implemented");
  }
}