import { UpdateTaskCommand } from "./updateTaskCommand";
import type { UpdateTaskRequest } from "./updateTaskRequest";

export class UpdateTaskController {
  command: UpdateTaskCommand;

  constructor(command: UpdateTaskCommand) {
    this.command = command;
  }

  update(request: UpdateTaskRequest): void {
    this.command.execute(request.id, request.title, request.description, request.completed);
  }
}