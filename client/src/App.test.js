import App from './App';
import { shallow } from "enzyme";
import TasksTable from "./tasks/TasksTable";
import TaskForm from "./tasks/TaskForm";

describe("The task management app should", () => {

  test("render a TasksTable component", () => {
    const app = shallow(<App/>);

    expect(app.containsMatchingElement(<TasksTable />)).toEqual(true);
  });

  test("render a TaskForm component", () => {
    const app = shallow(<App/>);

    expect(app.containsMatchingElement(<TaskForm />)).toEqual(true);
  });
});