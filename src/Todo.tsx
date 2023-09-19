import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./App.css";
import TodoItem from "./TodoItem";

const Todo: React.FC = () => {
  const [data, setData] = useState<string[]>(["shopping", "homeWork"]);
  const [checks, setChecks] = useState<boolean[]>([false, false]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleCheck = (index: number) => {
    const newChecks: boolean[] = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  const addTodo = () => {
    if (inputValue === "") {
      const temp: any = document.querySelector<HTMLElement>(".inputField");
      temp.style.borderColor = "red";
    } else {
      const newData = [inputValue, ...data];
      const newChecks = [false, ...checks];
      setData(newData);
      setChecks(newChecks);
      setInputValue("");
      const temp: any = document.querySelector<HTMLElement>(".inputField");
      temp.style.borderColor = "black";
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    const temp: any = document.querySelector<HTMLElement>(".inputField");
    temp.style.borderColor = "black";
  };

  return (
    <div className="App">
      <div className="container">
        <TodoItem data={data} checks={checks} handleCheck={handleCheck} />

        <h3>Todo</h3>
        <InputGroup className="mb-3">
          <Form.Control
            className="inputField"
            placeholder="Your Todo..."
            value={inputValue}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={handleInputChange}
          />
        </InputGroup>
        <Button variant="light" className="custom-button" onClick={addTodo}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Todo;
