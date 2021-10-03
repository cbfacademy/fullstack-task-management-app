import {CreateTaskController} from "../../../src/controllers/CreateTaskController";
import {CreateTaskCommandSpy} from "../../fixture/CreateTaskCommandSpy";

describe("The create task controller should", () => {
  const command = new CreateTaskCommandSpy();
  const controller = new CreateTaskController(command);

  it("process a request to add a new task", () => {
    const createTaskRequest = {
      title: "New task title",
      description: "New task description"
    };

    controller.create(createTaskRequest);

    expect(command.wasCalled()).toEqual(1);
  })
})