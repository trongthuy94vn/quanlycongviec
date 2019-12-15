import React, { useContext } from "react";

import TaskItem from "./Item";

import { TasksContext } from "../../context/TaskContext";

const TaskList = () => {
  const { tasksList } = useContext(TasksContext);

  return (
    <>
      {tasksList.map((task, index) => (
        <TaskItem key={task.id} index={index} task={task} />
      ))}
    </>
  );
};

export default TaskList;
