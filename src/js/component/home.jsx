import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleChande = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      setTask([...task, inputValue]);
      setInputValue("");
      setCounter(counter + 1);
    }
  };
  const handleRemoveTask = (e) => {
    const newtask = task.filter((task) => task !== e);
    setTask(newtask);
    setCounter(counter - 1);
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
        {task.map((t) => (
          <li>
            <div className="task">{t}</div>
            <div
              className={`xMark fa fa-xmark`}
              onClick={() => handleRemoveTask(t)}
            ></div>
          </li>
        ))}
      </ul>
      <div className="counter">{counter} items left</div>
      <div className="final1">empty</div>
      <div className="final2">empty</div>
    </div>
  );
};

export default Home;
