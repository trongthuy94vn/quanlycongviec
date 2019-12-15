import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const TaskSortControl = () => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Sắp sếp"
      data-toggle="dropdown"
    >
      <Dropdown.Item>Tên A-Z</Dropdown.Item>
      <Dropdown.Item>Tên A-Z</Dropdown.Item>
      <Dropdown.Item>Trạng Thái Kích Hoạt</Dropdown.Item>
      <Dropdown.Item>Trạng Thái Ẩn</Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskSortControl;
