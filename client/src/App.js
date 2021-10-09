import React from 'react';
import './App.css';
import TaskForm from "./tasks/TaskForm";
import TasksTable from "./tasks/TasksTable";

function App() {
  return (
    <div className="App container">
      <div>
        <TaskForm />
      </div>
      <div>
        <TasksTable />
      </div>
    </div>
  );
}

export default App;
