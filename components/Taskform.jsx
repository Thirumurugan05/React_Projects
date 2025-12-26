import { useState } from "react";

const Taskform = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") {
      return alert("Please Enter The Item");
    } else {
      addTask(text);
      setText("");
    }
  };

  return (
    <>
      <div className="task_container">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Add the items"
        />
        <button onClick={handleSubmit}>Add Item</button>
      </div>
    </>
  );
};

export default Taskform;
