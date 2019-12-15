import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import TaskForm from "./components/Task/Form";
import TaskTable from "./components/Task/Table";
import TaskControl from "./components/Task/Controls";

import "./App.css";

const tasksList = [
  { id: 1, task: "Đi làm", status: true },
  { id: 2, task: "Đi chơi", status: false },
  { id: 3, task: "Xem phim", status: true }
];

function App() {
  return (
    <Container>
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <Row>
        <TaskForm />
        <Col xs="8" sm="8" md="8" lg="8">
          <Button type="button" variant="primary">
            Thêm Công Việc
          </Button>
          <TaskControl />
          <TaskTable tasksList={tasksList} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
