import React from "react";

import TaskItem from "./Item";

const TaskList = ({ tasksList, onEditTask }) => {
  return (
    <>
      {tasksList.map((task, index) => (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onEditTask={onEditTask}
        />
      ))}
    </>
  );
};

export default TaskList;
