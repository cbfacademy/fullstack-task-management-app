import React, { Component } from 'react';
import axios from 'axios'

class TasksTable extends Component {

  state = {
    tasks: []
  }

  componentDidMount = () => {
    const apiURL = 'http://localhost:4000/tasks';
    return axios.get(apiURL)
      .then(response => {
        this.setState({ tasks: response.data })
      })
  }

  render = () => {
    let items = this.state.tasks.map((task) => {
      return (
        <tr key = { task.id }>
          <td>{ task.id }</td>
          <td>{ task.title }</td>
          <td>{ task.description }</td>
          <td>
            <input
              id="completed"
              type="checkbox"
              name="completed"
              defaultChecked={ task.completed }
            />
          </td>
        </tr>
      )})
    return (
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Completed</th>
        </tr>
        </thead>
        <tbody> { items } </tbody>
      </table>
    )
  }
}

export default TasksTable;