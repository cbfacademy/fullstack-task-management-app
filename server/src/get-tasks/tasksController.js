import { Task } from "../domain/task";
import { GetTasksQuery } from "./getTasksQuery";

export class TasksController {
  getTasksQuery: GetTasksQuery;

  constructor(query: GetTasksQuery) {
    this.getTasksQuery = query;
  }

  allTasks(): Task[] {
    return this.getTasksQuery.getTasks();
  }
}