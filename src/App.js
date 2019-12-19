import React, { useReducer, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TaskForm from "./components/Task/Form/Form";
import TaskTable from "./components/Task/Table";
import TaskControl from "./components/Task/Controls";

import TasksContextProvider from "./context/TaskContext";
import tasksReducer, { initialState } from "./reducers/tasks";
import { toggleForm, editForm } from "./actions/tasks";

import "./App.css";

function App() {
  const [state, dispatchTasks] = useReducer(tasksReducer, initialState);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    task: "",
    status: true
  });

  const { isShow, tasks } = state;

  const onEditTask = task => {
    dispatchTasks(editForm());
    setCurrentTask(task);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage.getItem("tasks"));
  }, [tasks]);

  const handleToggle = () => {
    dispatchTasks(toggleForm());
  };

  return (
    <TasksContextProvider
      value={{ dispatchTasks, state, onEditTask, currentTask }}
    >
      <Container>
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <Row>
          {isShow && <TaskForm />}
          <Col
            xs={!isShow ? "12" : "8"}
            sm={!isShow ? "12" : "8"}
            md={!isShow ? "12" : "8"}
            lg={!isShow ? "12" : "8"}
          >
            <Button type="button" variant="primary" onClick={handleToggle}>
              <FontAwesomeIcon icon="plus" /> Thêm Công Việc
            </Button>
            <TaskControl />
            <TaskTable tasksList={tasks} />
          </Col>
        </Row>
      </Container>
    </TasksContextProvider>
  );
}

export default App;
