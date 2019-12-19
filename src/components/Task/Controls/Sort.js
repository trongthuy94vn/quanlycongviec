import React, { useContext } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../../context/TaskContext";
import { aToZ, zToA } from "../../../actions/tasks";

const TaskSortControl = () => {
  const { dispatchTasks } = useContext(TasksContext);

  const ascending = () => {
    dispatchTasks(aToZ());
  };

  const descending = () => {
    dispatchTasks(zToA());
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
