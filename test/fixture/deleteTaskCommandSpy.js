import type { DeleteTaskCommand } from "../../src/delete-task/deleteTaskCommand";

export class DeleteTaskCommandSpy implements DeleteTaskCommand {
  numberOfCalls: number = 0;

  execute(id): void {
    this.numberOfCalls++;
  };

  wasCalled(): number {
    return this.numberOfCalls;
  }
}