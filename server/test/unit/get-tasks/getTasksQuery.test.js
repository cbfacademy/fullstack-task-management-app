import { getAllTestTasks } from "../../fixture/tasksFixture";
import { SimpleGetTasksQuery } from "../../../src/get-tasks/getTasksQuery";
import { TasksRepositoryFake } from "../../fixture/tasksRepositoryFake";

describe("Get tasks query should", () => {
  const repository = new TasksRepositoryFake();
  const query = new SimpleGetTasksQuery(repository);

  it("return all tasks from the repository", () => {
    const expectedTasks = getAllTestTasks();

    const actual = query.getTasks();

    expect(actual).toEqual(expectedTasks);
  })
})