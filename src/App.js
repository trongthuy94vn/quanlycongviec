import React, { useReducer } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TaskForm from "./components/Task/Form";
import TaskTable from "./components/Task/Table";
import TaskControl from "./components/Task/Controls";

import tasksReducer, { initialTasks } from "./reducers/tasks";
import TasksContextProvider from "./context/TaskContext";

import "./App.css";

function App() {
  const [tasksList, dispatchTasks] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContextProvider value={dispatchTasks}>
      <Container>
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <Row>
          <TaskForm />
          <Col xs="8" sm="8" md="8" lg="8">
            <Button type="button" variant="primary">
              <FontAwesomeIcon icon="plus" /> Thêm Công Việc
            </Button>
            <TaskControl />
            <TaskTable tasksList={tasksList}/>
          </Col>
        </Row>
      </Container>
    </TasksContextProvider>
  );
}

export default App;
