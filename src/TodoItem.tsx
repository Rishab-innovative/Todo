import React from "react";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type TodoItemProps = {
  data: string[];
  checks: boolean[];
  handleCheck: (index: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ data, checks, handleCheck }) => {
  return (
    <>
      <h3>Todo App</h3>
      {data.map((item, index) => (
        <InputGroup key={index} className="mb-3">
          <InputGroup.Checkbox
            onChange={() => handleCheck(index)}
            checked={checks[index]}
          />
          <Form.Control value={item} readOnly />
          {checks[index] ? <Badge bg="secondary">complete</Badge> : ""}
        </InputGroup>
      ))}
    </>
  );
};

export default TodoItem;
