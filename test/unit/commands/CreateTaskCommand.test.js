import {TasksRepositoryFake} from "../../fixture/TasksRepositoryFake";
import {SimpleCreateTaskCommand} from "../../../src/commands/CreateTaskCommand";

describe("The create task command should", () => {
  const repository = new TasksRepositoryFake();
  const command = new SimpleCreateTaskCommand(repository);

  it("invoke the repository to save the new task", () => {
    command.execute("new task title", "new task description");

    expect(repository.wasCalled()).toEqual(1);
  })
})