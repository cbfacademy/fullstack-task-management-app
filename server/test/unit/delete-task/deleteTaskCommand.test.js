import { TasksRepositoryFake } from "../../fixture/tasksRepositoryFake";
import { SimpleDeleteTaskCommand } from "../../../src/delete-task/deleteTaskCommand";

describe("The delete task command should", () => {
  const repository = new TasksRepositoryFake();
  const command = new SimpleDeleteTaskCommand(repository);

  it("invoke the repository to delete an existing task", () => {
    command.execute(2);

    expect(repository.wasCalled()).toEqual(1);
  });
})