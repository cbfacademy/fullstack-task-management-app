import { Task } from "../domain/Task";

export interface TasksRepository {
  getAll(): Task[];
  getBy(id: number): Task;
  save(task: Task): void;
}

export class InMemoryTasksRepository implements TasksRepository {
  getAll(): Task[] {
    throw new Error("Not implemented");
  }

  getBy(id: number): Task {
    throw new Error("Not implemented");
  }

  save(task): void {
    throw new Error("Not implemented");
  }
}