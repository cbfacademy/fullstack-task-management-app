import { TasksController } from "../../../src/get-tasks/tasksController";
import { getAllTestTasks } from "../../fixture/tasksFixture";
import { GetTasksQueryStub } from "../../fixture/getTasksQueryStub";

describe("The tasks controller should", () => {
  const query = new GetTasksQueryStub();
  const controller = new TasksController(query);

  it("retrieve all tasks", () => {
    const expectedTasks = getAllTestTasks();

    const actualTasks = controller.allTasks();

    expect(actualTasks).toEqual(expectedTasks);
  })
});
