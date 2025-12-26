import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  deleteTask,
  toggleTask,
  editId,
  setEditId,
  editText,
  setEditText,
  ubdateTask
}) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editId={editId}
          setEditId={setEditId}
          editText={editText}
          setEditText={setEditText}
          ubdateTask={ubdateTask}
        />
      ))}
    </>
  );
};

export default TaskList;
