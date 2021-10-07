import type { CreateTaskRequest } from "./createTaskRequest";
import { CreateTaskCommand } from "./createTaskCommand";

export class CreateTaskController {
  command: CreateTaskCommand;

  constructor(command: CreateTaskCommand) {
    this.command = command;
  }

  create(request: CreateTaskRequest): void {
    this.command.execute(request.title, request.description);
  }
}