const TaskItem = ({
  task,
  deleteTask,
  toggleTask,
  editId,
  setEditId,
  editText,
  setEditText,
  ubdateTask
}) => {
  return (
 <div className="task-item">
  {editId === task.id ? (
    <>
      <input
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
      />
      <button onClick={() => ubdateTask(task.id)}>Save</button>
    </>
  ) : (
    <>
      <span
        className={`task-text ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <div className="task-actions">
        <button
          onClick={() => {
            setEditId(task.id);
            setEditText(task.text);
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </>
  )}
</div>

  );
};

export default TaskItem;
