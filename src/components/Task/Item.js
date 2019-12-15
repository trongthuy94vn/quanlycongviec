import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../context/TaskContext";
import { DELETE_TASK, UPDATE_STATUS } from "../../constants/ActionTypes";

const TaskItem = ({ task, index }) => {
  const { dispatchTasks } = useContext(TasksContext);

  const handleDeleteTask = () => {
    dispatchTasks({ type: DELETE_TASK, id: task.id });
  };

  const handleUpdateStatus = () => {
    dispatchTasks({ type: UPDATE_STATUS, id: task.id });
  };
  return (
    <tr>
      <td>{++index}</td>
      <td>{task.task}</td>
      <td className="text-center">
        {task.status ? (
          <Button variant="danger" size="sm" onClick={handleUpdateStatus}>
            Kích Hoạt
          </Button>
        ) : (
          <Button variant="success" size="sm" onClick={handleUpdateStatus}>
            Ẩn
          </Button>
        )}
      </td>
      <td className="text-center">
        <Button type="button" variant="warning">
          <FontAwesomeIcon icon="pencil-alt" /> Sửa
        </Button>
        &nbsp;
        <Button type="button" variant="danger" onClick={handleDeleteTask}>
          <FontAwesomeIcon icon={["far", "trash-alt"]} /> Xóa
        </Button>
      </td>
    </tr>
  );
};

export default TaskItem;
