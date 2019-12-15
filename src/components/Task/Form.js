import React, { useContext, useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../context/TaskContext";
import { ADD_TASK } from "../../constants/ActionTypes";

const TaskForm = () => {
  const { dispatchTask } = useContext(TasksContext);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState(false);

  function isActive(status) {
    if (status === "true") return true;
    return false;
  }

  const handleSubmit = e => {
    if (task) {
      e.preventDefault();
      dispatchTask({ type: ADD_TASK, task, status: isActive(status) });
      setTask("");
      setStatus(false);
    }
  };

  const handleResetSubmit = e => {
    setTask("");
    setStatus(false);
  };
  return (
    <Col xl="4" sm="4" md="4" lg="4" className="px5">
      <div>
        <Alert variant="warning">
          <Alert.Heading as="h5">
            Thêm Công Việc
            <span>
              <FontAwesomeIcon icon="times-circle" className="float-right" />
            </span>
          </Alert.Heading>
        </Alert>
      </div>
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
    </Col>
  );
};

export default TaskForm;
