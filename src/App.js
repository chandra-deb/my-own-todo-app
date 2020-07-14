import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Task from "./components/task";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Task />
    </React.Fragment>
  );
}

export default App;
