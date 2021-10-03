import { getAllTestTasks } from "../../fixture/tasksFixture";
import { SimpleGetTasksQuery } from "../../../src/queries/GetTasksQuery";
import { TasksRepositoryFake } from "../../fixture/TasksRepositoryFake";

describe("Get tasks query should", () => {
  const repository = new TasksRepositoryFake();
  const query = new SimpleGetTasksQuery(repository);

  it("return all tasks from the repository", () => {
    const expectedTasks = getAllTestTasks();

    const actual = query.getTasks();

    expect(actual).toEqual(expectedTasks);
  })
})