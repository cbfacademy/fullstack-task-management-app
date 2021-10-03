import type { CreateTaskRequest } from "./CreateTaskRequest";
import { CreateTaskCommand } from "../commands/CreateTaskCommand";

export class CreateTaskController {
  command: CreateTaskCommand;

  constructor(command: CreateTaskCommand) {
    this.command = command;
  }

  create(request: CreateTaskRequest): void {
    this.command.execute(request.title, request.description);
  }
}