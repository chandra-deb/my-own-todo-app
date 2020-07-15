import React, { Component } from "react";

class Task extends Component {
  state = {
    name: "",
    addedTasks: [],
    completedTasks: [],
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleTask = () => {
    let { name, addedTasks } = this.state;
    if (addedTasks.indexOf(name) === -1) {
      if (name !== "") {
        addedTasks.push(this.state.name);
        addedTasks = addedTasks.reverse();
        name = "";
        this.setState({ name, addedTasks });
      }
    }
  };

  handleDelete = (task) => {
    const addedTasks = this.state.addedTasks.filter((t) => t !== task);
    this.setState({ addedTasks });
  };

  handleDone = (task) => {
    let completedTask = this.state.completedTasks;
    const addedTasks = this.state.addedTasks.filter((t) => t !== task);
    completedTask.push(task);
    this.setState({ addedTasks, completedTask });
  };

  handleCompletedDelete = (task) => {
    const completedTasks = this.state.completedTasks.filter((t) => t !== task);
    this.setState({ completedTasks });
  };

  clearCompletedTasks = () => {
    const completedTasks = [];
    this.setState({ completedTasks });
  };
  showTaskAlreadyAdded() {
    console.log("show task already added called!");
    const { addedTasks, name } = this.state;
    if (addedTasks.indexOf(name) !== -1) {
      return "Task already Added and you haven't completed it yet";
    }
  }

  formatTask() {
    let classes = "m-2 badge badge-";
    classes += this.state.addedTasks.length === 0 ? "warning" : "info";
    return classes;
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{ fontSize: 24, display: "block", width: 250 }}
          className={this.formatTask()}
        >
          Tasks Remains {this.state.addedTasks.length}
        </div>
        <div style={{ display: "inline-block" }}>
          {this.state.addedTasks.map((t) => (
            <div>
              <span
                style={{ fontSize: 18 }}
                className="m-4 badge badge-light"
                key={t}
              >
                {t}
              </span>
              <button
                onClick={() => this.handleDone(t)}
                className="btn btn-success m-2"
              >
                Done
              </button>
              <span
                onClick={() => this.handleDelete(t)}
                className="btn btn-danger m-2"
              >
                Delete
              </span>
            </div>
          ))}
          <div>
            <input
              className="m-2"
              value={this.state.name}
              type="text"
              placeholder="Add a task"
              onChange={this.handleChange}
            />
            <button
              style={{ verticalAlign: "top" }}
              onClick={this.handleTask}
              className="btn btn-primary m-2"
            >
              Add
            </button>
          </div>
          <p className="badge badge-warning m-2">
            {this.showTaskAlreadyAdded()}
          </p>
        </div>
        <div
          className="m-4"
          style={{
            display: "inline-block",
            verticalAlign: "top",
            position: "relative",
            top: -75,
          }}
        >
          <div
            className="badge badge-warning m-2"
            style={{ fontSize: 24, display: "block", width: 300 }}
          >
            <span>Completed tasks {this.state.completedTasks.length}</span>
            <button
              onClick={this.clearCompletedTasks}
              style={{ position: "relative", left: 110 }}
              className="badge badge-danger"
            >
              Clear All
            </button>
          </div>

          {this.state.completedTasks.map((t) => (
            <div>
              <span
                style={{ fontSize: 20, textDecoration: "line-through" }}
                className="badge badge-dark m-2"
                key={t}
              >
                {t}
              </span>
              <span
                onClick={() => this.handleCompletedDelete(t)}
                className="btn btn-danger m-2"
              >
                Delete
              </span>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Task;
