import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskSearchControl = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Nhập từ khóa..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="primary" type="button">
          <FontAwesomeIcon icon="search" /> Tìm
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default TaskSearchControl;
