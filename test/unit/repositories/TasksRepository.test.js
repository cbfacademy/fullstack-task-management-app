import {InMemoryTasksRepository} from "../../../src/repositories/TasksRepository";

describe("The inmemory tasks repository should", () => {
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
    const repository = new InMemoryTasksRepository();

    const tasks = repository.getAll();
    expect(tasks).toEqual(expectedTasks);
  })
})
