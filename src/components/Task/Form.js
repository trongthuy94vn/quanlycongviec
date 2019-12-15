import React from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskForm = () => {
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
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Tên :</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Trạng Thái :</Form.Label>
          <Form.Control as="select" required>
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
          <Button type="submit" variant="danger">
            <FontAwesomeIcon icon="times" /> Hủy Bỏ
          </Button>
        </div>
      </Form>
    </Col>
  );
};

export default TaskForm;
