import { Task } from "../domain/task";

export interface TasksRepository {
  getAll(): Task[];
  getBy(id: number): Task;
  save(task: Task): void;
  delete(id: number): void;
}

export class InMemoryTasksRepository implements TasksRepository {
  tasks: Map<number, Task>;
  startIndex: number;

  constructor() {
    this.tasks = INITIAL_TASKS;
    this.startIndex = 3;
  }

  getAll(): Task[] {
    return Array.from(this.tasks.values());
  }

  getBy(id: number): Task {
    return this.tasks.get(id);
  }

  save(task: Task): void {
    if (! task.id) {
      task.id = this.startIndex;
      this.startIndex = this.startIndex + 1;
    }
    if (this.tasks.has(task.id)) {
      this.tasks.delete(task.id);
    }
    this.tasks.set(task.id, task);
  }

  delete(id): void {
    this.tasks.delete(id);
  }

  count(): number {
    return this.tasks.size;
  }
}

const INITIAL_TASKS: Map<number, Task> = new Map([
  [
    1,
    {
      id: 1,
      title: "Contact checkout",
      description: "Inform the checkout team about the new version of our API.",
      completed: false
    }
  ],
  [
    2,
    {
      id: 2,
      title: "Contract phase",
      description: "Prepare the contract phase of the old API.",
      completed: false
    }
  ]
]);