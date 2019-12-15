import React from "react";
import { Button } from "react-bootstrap";

const TaskItem = ({ task, index }) => {
  return (
    <tr>
      <td>{++index}</td>
      <td>{task.task}</td>
      <td className="text-center">
        {task.status ? (
          <Button variant="danger" size="sm">
            Kích Hoạt
          </Button>
        ) : (
          <Button variant="success" size="sm">
            Ẩn
          </Button>
        )}
      </td>
      <td className="text-center">
        <Button type="button" variant="warning">
          Sửa
        </Button>
        &nbsp;
        <Button type="button" variant="danger">
          Xóa
        </Button>
      </td>
    </tr>
  );
};

export default TaskItem;
