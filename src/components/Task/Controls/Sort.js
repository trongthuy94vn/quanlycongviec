import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskSortControl = () => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Sắp sếp"
      data-toggle="dropdown"
    >
      <Dropdown.Item>
        <FontAwesomeIcon icon="sort-alpha-down" /> Tên A-Z
      </Dropdown.Item>
      <Dropdown.Item>
        <FontAwesomeIcon icon="sort-alpha-up" /> Tên A-Z
      </Dropdown.Item>
      <Dropdown.Item>Trạng Thái Kích Hoạt</Dropdown.Item>
      <Dropdown.Item>Trạng Thái Ẩn</Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskSortControl;
