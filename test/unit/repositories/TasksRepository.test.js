import {InMemoryTasksRepository} from "../../../src/repositories/TasksRepository";
import { Task } from "../../../src/domain/Task";

describe("The inmemory tasks repository should", () => {
  const repository = new InMemoryTasksRepository();

  it("return two tasks when initialised", () => {
    const expectedTasks = [
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

    const tasks = repository.getAll();

    expect(tasks).toEqual(expectedTasks);
  });

  it("assign an identifier and save a newly created task", () => {
    const task = new Task("a title", "a description");

    repository.save(task);

    expect(repository.tasks.length).toEqual(3);
    repository.tasks.forEach((task: Task) => {
      expect(task.id).toBeGreaterThan(0);
    })
  });
})
