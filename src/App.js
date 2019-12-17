import React, { useReducer, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TaskForm from "./components/Task/Form/Form";
import TaskTable from "./components/Task/Table";
import TaskControl from "./components/Task/Controls";

import tasksReducer, { initialTasks } from "./reducers/tasks";
import TasksContextProvider from "./context/TaskContext";
import { initialState, reducer } from "./reducers/state";

import { EDIT_TASK } from "./constants/ActionTypes";

import "./App.css";

function App() {
  const [tasksList, dispatchTasks] = useReducer(tasksReducer, initialTasks);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentTask, setCurrentTask] = useState({
    id: null,
    task: "",
    status: true
  });
  const handleEditTask = task => {
    dispatch({ type: "EDIT_TASK" });
    setCurrentTask(task);
  };

  const handleShowTaskForm = () => {
    dispatch({ type: "SHOW_FORM" });
  };

  const handleUpdateTask = (id, updateTask) => {
    dispatch({ type: "EDIT_TASK" });
    dispatchTasks({ type: EDIT_TASK, task: updateTask });
  };
  return (
    <TasksContextProvider value={{ dispatchTasks, dispatch, state }}>
      <Container>
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <Row>
          {state.isShow && (
            <TaskForm
              onUpdateTask={handleUpdateTask}
              currentTask={currentTask}
            />
          )}
          <Col
            xs={!state.isShow ? "12" : "8"}
            sm={!state.isShow ? "12" : "8"}
            md={!state.isShow ? "12" : "8"}
            lg={!state.isShow ? "12" : "8"}
          >
            <Button
              type="button"
              variant="primary"
              onClick={handleShowTaskForm}
            >
              <FontAwesomeIcon icon="plus" /> Thêm Công Việc
            </Button>
            <TaskControl />
            <TaskTable tasksList={tasksList} onEditTask={handleEditTask} />
          </Col>
        </Row>
      </Container>
    </TasksContextProvider>
  );
}

export default App;
