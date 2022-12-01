import React, { useState } from "react";
import Task from "./task";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleChande = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.keyCode == 13 && inputValue != "") {
      const newValue = {
        label: inputValue,
        done: false,
      };
      setTasks([...tasks, newValue]);
      setInputValue("");
      setCounter(counter + 1);
    }
  };
  const handleRemoveTask = (event) => {
    const newtask = tasks.filter((task) => task !== event);
    setTasks(newtask);
    setCounter(counter - 1);
  };
  const handleDelete = () => {
    setTasks([]);
    setCounter(0);
  };

  return (
    <div className="container">
      <div>
        <h1 className="todos">todos</h1>
      </div>
      <ul className="list">
        <li>
          <input
            type="text"
            placeholder="What needs to be done?"
            onChange={handleChande}
            onKeyDown={handleKeyDown}
            value={inputValue}
          ></input>
        </li>
        {tasks.map((task, index) => (
          <Task task={task} handleRemoveTask={handleRemoveTask} key={index} />
        ))}
      </ul>
      <div className="counter">{counter} items left</div>
      <div className="final1"></div>
      <div className="final2"></div>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => handleDelete()}
      >
        Restart List
      </button>
    </div>
  );
};

export default Home;
