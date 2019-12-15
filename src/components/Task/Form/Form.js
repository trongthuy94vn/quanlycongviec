import React, { useContext } from "react";
import { Col, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EditTaskForm from "./EditTaskForm";
import AddTaskForm from "./AddTaskForm";

import { TasksContext } from "../../../context/TaskContext";

const TaskForm = (props) => {
  const { dispatch, state } = useContext(TasksContext);

  const handleCloseForm = () => {
    dispatch({ type: "CLOSE_FORM" });
  };
  return (
    <Col xl="4" sm="4" md="4" lg="4" className="px5">
      <div>
        <Alert variant="warning">
          <Alert.Heading as="h5">
            {state.isEdit ? "Sửa Công Việc" : "Thêm Công Việc"}
            <span>
              <FontAwesomeIcon
                icon="times-circle"
                className="float-right"
                onClick={handleCloseForm}
              />
            </span>
          </Alert.Heading>
        </Alert>
      </div>
      {state.isEdit ? (
        <EditTaskForm {...props} />
      ) : (
        <AddTaskForm />
      )}
    </Col>
  );
};

export default TaskForm;
