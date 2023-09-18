import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Todo: React.FC = () => {
  const [data, setData] = useState<string[]>(["shopping", "homeWork"]);
  const [checks, setChecks] = useState<boolean[]>([false, false]);
  const [inputValue, setInputValue] = useState<string>("");

  const _handleCheck = (index: number) => {
    const newChecks: boolean[] = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
  };

  const _add = () => {
    if (inputValue === "") {
      const temp: any = document.querySelector<HTMLElement>(".inputField");
      temp.style.borderColor = "red";
    } else {
      data.unshift(inputValue);
      setData([...data]);
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Todo App</h3>

        {data.map((item, index) => (
          <InputGroup key={index} className="mb-3">
            <InputGroup.Checkbox
              onChange={() => _handleCheck(index)}
              checked={checks[index]}
            />
            <Form.Control value={item} readOnly />
            {checks[index] ? <Badge bg="secondary">complete</Badge> : ""}
          </InputGroup>
        ))}

        <h3>Todo</h3>
        <InputGroup className="mb-3">
          <Form.Control
            className="inputField"
            placeholder="Your Todo..."
            value={inputValue}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => setInputValue(event.target.value)}
          />
        </InputGroup>
        <Button variant="light" className="custom-button" onClick={_add}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Todo;
