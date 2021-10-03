import type { UpdateTaskCommand } from "../../src/commands/UpdateTaskCommand";

export class UpdateTaskCommandSpy implements UpdateTaskCommand {
  numberOfCalls: number = 0;

  execute(id: number, title: string, description: string, completed: false) {
    this.numberOfCalls++;
  }

  wasCalled(): number {
    return this.numberOfCalls;
  }
}