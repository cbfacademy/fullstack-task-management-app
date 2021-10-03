import { TasksController } from "../../../src/controllers/TasksController";
import { getAllTasks } from "../../fixture/tasksFixture";
import { GetTasksQueryStub } from "../../fixture/GetTasksQueryStub";

describe("The tasks controller should", () => {
  const query = new GetTasksQueryStub();
  const controller = new TasksController(query);

  it("retrieve all tasks", () => {
    const expectedTasks = getAllTasks();

    const actualTasks = controller.allTasks();

    expect(actualTasks).toEqual(expectedTasks);
  })
});
