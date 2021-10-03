import { TasksController } from "../../../src/controllers/TasksController";
import { getAllTestTasks } from "../../fixture/tasksFixture";
import { GetTasksQueryStub } from "../../fixture/GetTasksQueryStub";

describe("The tasks controller should", () => {
  const query = new GetTasksQueryStub();
  const controller = new TasksController(query);

  it("retrieve all tasks", () => {
    const expectedTasks = getAllTestTasks();

    const actualTasks = controller.allTasks();

    expect(actualTasks).toEqual(expectedTasks);
  })
});
