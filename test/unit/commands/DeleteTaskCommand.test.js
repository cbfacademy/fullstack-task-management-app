import { TasksRepositoryFake } from "../../fixture/TasksRepositoryFake";
import { SimpleDeleteTaskCommand } from "../../../src/commands/DeleteTaskCommand";

describe("The delete task command should", () => {
  const repository = new TasksRepositoryFake();
  const command = new SimpleDeleteTaskCommand(repository);

  it("invoke the repository to delete an existing task", () => {
    command.execute(2);

    expect(repository.wasCalled()).toEqual(1);
  });
})