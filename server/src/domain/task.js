export class Task {
  id: number;
  title: string;
  description: string;
  completed: false;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }
}