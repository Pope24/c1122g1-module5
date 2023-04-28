import "./toDoApp.css";
import React, { Component } from "react";

export default class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      job: "",
    };
  }
  addJob = (newJob) => {
    this.setState({
      jobs: [...this.state.jobs, newJob],
    });
  };
  inputJob = (newJob) => {
    console.log(newJob);
    this.setState({
      job: newJob,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter job today"
          onChange={(e) => {
            this.inputJob(e.target.value);
          }}
        />
        <button
          onClick={() => {
            this.addJob(this.state.job);
          }}
        >
          Add
        </button>
        <div>
          {this.state.jobs.map((job) => {
            return <p>{job}</p>;
          })}
        </div>
      </div>
    );
  }
}
