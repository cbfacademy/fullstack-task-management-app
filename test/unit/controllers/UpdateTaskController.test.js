import { UpdateTaskCommandSpy } from "../../fixture/UpdateTaskCommandSpy";
import { UpdateTaskController } from "../../../src/controllers/UpdateTaskController";

describe("The update task controller should", () => {
  const command = new UpdateTaskCommandSpy();
  const controller = new UpdateTaskController(command);

  it("process a request to update an existing task", () => {
    const updateTaskRequest = {
      id: 2,
      description: "Existing task updated description"
    };

    controller.update(updateTaskRequest);

    expect(command.wasCalled()).toEqual(1);
  });
})