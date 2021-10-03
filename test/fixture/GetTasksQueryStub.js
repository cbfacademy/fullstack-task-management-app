import type {GetTasksQuery} from "../../src/queries/GetTasksQuery";
import { getAllTasks } from "./tasksFixture";

export class GetTasksQueryStub implements GetTasksQuery {
  getTasks() {
    return getAllTasks();
  }
}