import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { TasksContext } from "../../context/TaskContext";
import { deleteTask, updateStatus } from "../../actions/tasks";

const TaskItem = ({ task, index }) => {
  const { dispatchTasks, onEditTask } = useContext(TasksContext);

  const handleDeleteTask = () => {
    dispatchTasks(deleteTask(task.id));
  };

  const handleUpdateStatus = () => {
    dispatchTasks(updateStatus(task.id));
  };

  const handleEditTask = () => {
    onEditTask(task);
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
        <Button type="button" variant="warning" onClick={handleEditTask}>
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
