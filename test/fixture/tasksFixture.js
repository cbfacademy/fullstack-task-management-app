import { Task } from "../../src/domain/task";

export const getAllTestTasks = () : Task[] => {
  return [
    {
      id: 1,
      title: "Email client",
      description: "Book a discovery appointment with the client",
      completed: false
    },
    {
      id: 2,
      title: "Release plan",
      description: "Write release plan document",
      completed: false
    }
  ];
}