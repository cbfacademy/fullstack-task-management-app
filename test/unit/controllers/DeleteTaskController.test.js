import { DeleteTaskController } from "../../../src/controllers/DeleteTaskController";
import { DeleteTaskCommandSpy } from "../../fixture/DeleteTaskCommandSpy";

describe("The delete task controller should", () => {
  const command = new DeleteTaskCommandSpy();
  const controller = new DeleteTaskController(command);

  it("process a request to delete an existing task", () => {
    controller.delete(2);

    expect(command.wasCalled()).toEqual(1);
  });
})