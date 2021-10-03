import type {GetTasksQuery} from "../../src/queries/GetTasksQuery";
import { getAllTestTasks } from "./tasksFixture";

export class GetTasksQueryStub implements GetTasksQuery {
  getTasks() {
    return getAllTestTasks();
  }
}