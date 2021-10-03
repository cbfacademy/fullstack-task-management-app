import { InMemoryTasksRepository } from "../../../src/repositories/TasksRepository";
import { Task } from "../../../src/domain/Task";

describe("The inmemory tasks repository should", () => {

  it("return two tasks when initialised", () => {
    const repository = new InMemoryTasksRepository();
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
    const repository = new InMemoryTasksRepository();
    const task = new Task("a title", "a description");

    repository.save(task);

    expect(repository.count()).toEqual(3);
    repository.tasks.forEach((task: Task) => {
      expect(task.id).toBeGreaterThan(0);
    })
  });

  it("returns a task by its identifier", () => {
    const repository = new InMemoryTasksRepository();
    const expectedTask = {
      id: 2,
      title: "Contract phase",
      description: "Prepare the contract phase of the old API.",
      completed: false
    };

    const actualTask = repository.getBy(2);

    expect(actualTask).toEqual(expectedTask);
  });

  it("saves an existing and updated task", () => {
    const repository = new InMemoryTasksRepository();
    const updatedTask = {
      id: 2,
      title: "Prepare contract phase",
      description: "Break down the contract phase of the old API into atom steps.",
      completed: false
    };

    repository.save(updatedTask);

    expect(repository.getBy(2)).toEqual(updatedTask);
  });
})
