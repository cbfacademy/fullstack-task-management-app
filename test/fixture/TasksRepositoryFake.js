import type { TasksRepository } from "../../src/repositories/TasksRepository";
import { Task } from "../../src/domain/Task";
import { getAllTestTasks } from "./tasksFixture";

export class TasksRepositoryFake implements TasksRepository {
  tasks: Task[] = getAllTestTasks();
  numberOfCalls: number = 0;

  getAll(): Task[] {
    return this.tasks;
  }

  getBy(id: number): Task {
    this.numberOfCalls++;
    return this.tasks.find(task => task.id === id);
  }

  save(task: Task): void {
    this.numberOfCalls++;
    if (task.id) this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.tasks.push(task);
  }

  delete(id): void {
    this.numberOfCalls++;
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  wasCalled(): number {
    return this.numberOfCalls;
  }
}