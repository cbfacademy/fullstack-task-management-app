import React, {Component} from "react";
import axios from "axios";

class TaskForm extends Component {
  state = {
    title: '',
    description: '',
    completed: false
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name] : value});
  }

  handleCheck = (event) => {
    this.state.completed = event.target.checked;
  }

  handleClick = () => {
    const apiURL = `${process.env.REACT_APP_SERVER_URL}/tasks`;
    const data = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      completed: this.state.completed
    }
    axios
      .post(apiURL, data)
      .then(data => console.log(JSON.stringify(data)));
  }

  render = () => {
    return (
      <form className="border border-secondary">
        <div className="mb-3">
          <label id="titleLabel" className="form-label">Title</label>
          <input id="title" name="title" className="form-control" onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label id="descriptionLabel" className="form-label">Description</label>
          <textarea id="description" name="description" className="form-control" onChange={this.handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input id="completed" type="checkbox" name="completed" className="form-check-input" onClick={this.handleCheck} />
          <label id="completedLabel" className="form-check-label">Completed</label>
        </div>
        <button id="submit" className="btn btn-primary" onClick={this.handleClick}>
          Submit
        </button>
      </form>
    )
  }
}

export default TaskForm;