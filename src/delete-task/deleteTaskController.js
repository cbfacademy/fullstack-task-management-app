import { DeleteTaskCommand } from "./deleteTaskCommand";

export class DeleteTaskController {
  command: DeleteTaskCommand;

  constructor(command: DeleteTaskCommand) {
    this.command = command;
  }

  delete(id: number): void {
    this.command.execute(id);
  }
}