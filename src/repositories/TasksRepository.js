import { Task } from "../domain/Task";

export interface TasksRepository {
  getAll(): Task[];
  getBy(id: number): Task;
  save(task: Task): void;
}

export class InMemoryTasksRepository implements TasksRepository {
  tasks: Task [];
  startIndex: number;

  constructor() {
    this.tasks = INITIAL_TASKS;
    this.startIndex = 3;
  }

  getAll(): Task[] {
    return this.tasks;
  }

  getBy(id: number): Task {
    throw new Error("Not implemented");
  }

  save(task: Task): void {
    task.id = this.startIndex;
    this.startIndex = this.startIndex + 1;
    this.tasks.push(task);
  }
}

const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    title: "Contact checkout",
    description: "Inform the checkout team about the new version of our API.",
    completed: false
  },
  {
    id: 2,
    title: "Contract phase",
    description: "Prepare the contract phase of the old API.",
    completed: false
  }
];