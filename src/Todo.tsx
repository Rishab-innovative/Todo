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
        <InputGroup className="mb-3">
          <InputGroup.Checkbox
            onChange={() => _handleCheck(0)}
            checked={checks[0]}
          />
          <Form.Control value={data[0]} readOnly />
          {checks[0] ? <Badge bg="secondary">complete</Badge> : ""}
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Checkbox
            onChange={() => _handleCheck(1)}
            checked={checks[1]}
          />
          <Form.Control value={data[1]} readOnly />
          {checks[1] ? <Badge bg="secondary">complete</Badge> : ""}
        </InputGroup>
      </div>
    </div>
  );
};
export default Todo;
