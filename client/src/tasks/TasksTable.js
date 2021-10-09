import React, { Component } from 'react';
import axios from 'axios'

class TasksTable extends Component {

  state = {
    tasks: []
  }

  componentDidMount = () => {
    const apiURL = `${process.env.REACT_APP_SERVER_URL}/tasks`;
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
              className="text-center"
              disabled={true}
              defaultChecked={ task.completed }
            />
          </td>
        </tr>
      )})
    return (
      <table className="table table-bordered table-hover caption-top">
        <caption>Tasks</caption>
        <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Completed</th>
        </tr>
        </thead>
        <tbody>{ items }</tbody>
      </table>
    )
  }
}

export default TasksTable;