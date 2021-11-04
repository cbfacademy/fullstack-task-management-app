import React from "react";
import "./App.css";
import TaskForm from "./tasks/TaskForm";
import TasksTable from "./tasks/TasksTable";
import TaskTile from "./tasks/TaskTile";

function App() {
	return (
		<div className="App container">
			<TaskTile />
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
