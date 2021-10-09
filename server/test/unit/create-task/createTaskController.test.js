import { CreateTaskController } from "../../../src/create-task/createTaskController";
import { CreateTaskCommandSpy } from "../../fixture/createTaskCommandSpy";

describe("The create task controller should", () => {
  const command = new CreateTaskCommandSpy();
  const controller = new CreateTaskController(command);

  it("process a request to add a new task", () => {
    const createTaskRequest = {
      title: "New task title",
      description: "New task description",
      completed: true
    };

    controller.create(createTaskRequest);

    expect(command.wasCalled()).toEqual(1);
  })
})