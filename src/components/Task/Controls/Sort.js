import React, { useContext } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";

const TaskSortControl = () => {
  const { dispatchTasks } = useContext(TasksContext);

  const ascending = () => {
    dispatchTasks({ type: "A_TO_Z" });
  };

  const descending = () => {
    dispatchTasks({ type: "Z_TO_A" });
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Sắp sếp"
      data-toggle="dropdown"
    >
      <Dropdown.Item onClick={ascending}>
        <FontAwesomeIcon icon="sort-alpha-down" /> Tên A-Z
      </Dropdown.Item>
      <Dropdown.Item onClick={descending}>
        <FontAwesomeIcon icon="sort-alpha-up" /> Tên A-Z
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskSortControl;
