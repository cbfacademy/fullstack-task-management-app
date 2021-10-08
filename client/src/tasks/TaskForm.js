import React, { Component } from "react";
import axios from "axios";

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    completed: false
  };

  handleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;

    this.setState({ [name] : val});
  }

  handleCheck = (event) => {
    let val = event.target.value;

    this.setState({ completed : val});
  }

  handleClick = () => {
    const apiURL = 'http://localhost:4000/tasks';
    const data = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      completed: this.state.completed
    }
    axios.post(apiURL, data).then(r => console.log(JSON.stringify(r)));
  }

  render = () => {
    return (
      <form>
        <div>
          <label id="titleLabel">Title</label>
          <input
            id="title"
            name="title"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label id="descriptionLabel">Description</label>
          <input
            id="description"
            name="description"
            onChange={this.handleChange}

          />
        </div>
        <div>
          <label id="completedLabel">Completed</label>
          <input
            id="completed"
            type="checkbox"
            name="completed"
            onClick={this.handleCheck}
          />
        </div>
        <button
          id='submit'
          onClick={this.handleClick}>
          Submit
        </button>
      </form>
    )
  }
}

export default TaskForm;