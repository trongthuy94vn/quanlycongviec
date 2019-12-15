import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";
import { ADD_TASK } from "../../../constants/ActionTypes";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);
  const { dispatchTasks, dispatch } = useContext(TasksContext);

  const addTask = () => {
    dispatchTasks({ type: ADD_TASK, task, status: status });
    setTask("");
    setStatus(JSON.parse("false"));
    dispatch({ type: "SHOW_FORM" });
  };

  const handleSubmit = e => {
    if (task) {
      e.preventDefault();
      addTask();
    }
  };

  const handleResetSubmit = () => {
    dispatch({ type: "CLOSE_FORM" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Tên :</Form.Label>
        <Form.Control
          type="text"
          required
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Trạng Thái :</Form.Label>
        <Form.Control
          as="select"
          required
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="true">Kích Hoạt</option>
          <option value="false">Ẩn</option>
        </Form.Control>
      </Form.Group>
      <br />
      <div className="text-center">
        <Button type="submit" variant="warning">
          <FontAwesomeIcon icon="plus" /> Lưu lại
        </Button>
        &nbsp;
        <Button type="submit" variant="danger" onClick={handleResetSubmit}>
          <FontAwesomeIcon icon="times" /> Hủy Bỏ
        </Button>
      </div>
    </Form>
  );
};

export default AddTaskForm;
