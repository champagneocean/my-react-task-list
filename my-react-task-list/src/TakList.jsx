// src/components/TaskList.jsx
import React from 'react';
import Task from './task';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.indicador} task={task} />
      ))}
    </div>
  );
};

export default TaskList;