import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <FontAwesomeIcon icon="pencil-alt" /> Sửa
        </Button>
        &nbsp;
        <Button type="button" variant="danger">
          <FontAwesomeIcon icon={["far", "trash-alt"]} /> Xóa
        </Button>
      </td>
    </tr>
  );
};

export default TaskItem;
