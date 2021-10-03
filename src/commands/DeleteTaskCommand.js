import { TasksRepository } from "../repositories/TasksRepository";

export interface DeleteTaskCommand {
  execute(id: number): void;
}

export class SimpleDeleteTaskCommand implements  DeleteTaskCommand {
  constructor(repository: TasksRepository) {
    throw new Error("Not implemented");
  }

  execute(id): void {
    throw new Error("Not implemented");
  }
}