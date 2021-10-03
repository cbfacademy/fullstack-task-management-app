export class Task {
  id: number;
  title: string;
  description: string;
  completed: false;

  constructor(title: string, description: string) {
    throw new Error("Not implemented");
  }
}