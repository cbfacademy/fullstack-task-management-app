import type { GetTasksQuery } from "../../src/get-tasks/getTasksQuery";
import { getAllTestTasks } from "./tasksFixture";

export class GetTasksQueryStub implements GetTasksQuery {
  getTasks() {
    return getAllTestTasks();
  }
}