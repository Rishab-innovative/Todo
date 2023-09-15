import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo: React.FC = () => {
  const data: string[] = ["shopping", "homeWork"];
  const [checks, setChecks] = useState<boolean[]>([false, false]);

  const _handleCheck = (index: number) => {
    const newChecks: boolean[] = [...checks];
    newChecks[index] = !newChecks[index];
    setChecks(newChecks);
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
      </div>
    </div>
  );
};
export default Todo;
