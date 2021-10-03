import type { TasksRepository } from "../../src/repositories/TasksRepository";
import { Task } from "../../src/domain/Task";
import {getAllTestTasks} from "./tasksFixture";

export class TasksRepositoryFake implements TasksRepository {
  tasks: Task[] = getAllTestTasks();

  getAll(): Task[] {
    return this.tasks;
  }

  getBy(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  save(task: Task): void {
    this.tasks.push(task);
  }

}